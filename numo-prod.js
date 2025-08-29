function getFirstFocusableElement() {
  const focusableElements = document.querySelectorAll(
    'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  if (focusableElements.length > 0) {
    return focusableElements[0];
  } else {
    return null; // No focusable elements found
  }
}

function getNonAriaHiddenTextOfElement(element) {
    if (element.nodeType == 3) {
        return element.textContent;
    }
    if (!element.childNodes) return '';
    var returnText = '';
    for (const elCurrent of element.childNodes) {
        if ((elCurrent.nodeType == 1) && (elCurrent.getAttribute('aria-hidden') !== 'true')) {
            returnText += getNonAriaHiddenTextOfElement(elCurrent);
        } else if (elCurrent.nodeType == 3) {
            returnText += elCurrent.textContent;
        }
    }
    return returnText
}

class BugFix 
{    
    #node;

    get DOMNode()
    {
        return this.#node;
    }
    
    constructor(DOMNode)
    {
        this.#node = DOMNode;
    }
    
    testIfExists() 
    {

    }

    fix()
    {
        if (this.#node) {
            this.fixCore();
        }
    }
}


class BugFixScrolltoTopFocusing extends BugFix
{

    fixCore()
    {
        super.DOMNode.addEventListener('click', function() {
            getFirstFocusableElement().focus();
        })
    }
}


class BugIncorrectSkipLinkOnNumo extends BugFix
{
    fixCore()
    {
        super.DOMNode.classList.add('skip-to-content-link');
        super.DOMNode.style.removeProperty('visibility');
        super.DOMNode.style.backgroundColor = 'white';
        super.DOMNode.style.padding = '10px';
        super.DOMNode.tabIndex = '0';
    }
}

class BugFixMultiple {

    #nodes = [];

    get DOMNodes()
    {
        return this.#nodes;
    }

    set DOMNodes(value)
    {
        this.#nodes = value;
    }

    constructor(cssSelector = '')
    {
        if (cssSelector) {
            this.#nodes = document.querySelectorAll(cssSelector);
        } else {
            this.findAll();
        }
    }

    fix()
    {
        for (const elem of this.#nodes) {
            if (elem.nodeType == 1) 
                this.fixSingle(elem);
        }
    }

}

class BugBlocksInA extends BugFixMultiple
{
    findAll()
    {
        super.DOMNodes = document.querySelectorAll('a:has(span), a:has(div), a:has(h1), a:has(h2), a:has(h3), a:has(h4), a:has(h5), a:has(h6), a:has(p)');
    }

    fixSingle(node)
    {
        node.setAttribute('aria-label', getNonAriaHiddenTextOfElement(node));
    }
}

class BugBlocksInH1 extends BugFixMultiple
{
    findAll()
    {
        super.DOMNodes = document.querySelectorAll('h1:has(span), h1:has(div)');
    }

    fixSingle(node)
    {
        node.setAttribute('aria-label', getNonAriaHiddenTextOfElement(node));
    }
}


class BugFixAssignHeadingWithLvl extends BugFix
{
    #lvl = 2;
    set hLevel(lvl = 2)
    {
        this.#lvl = lvl;
    }

    fixCore()
    {
        super.DOMNode.role = 'heading';
        super.DOMNode.setAttribute('aria-level', this.#lvl);
    }
}

class BugFixAddToAnyKitFixOpenInNewTab extends BugFixMultiple
{
    findAll()
    {
        super.DOMNodes = document.querySelectorAll('.a2a_kit');
    }

    fixSingle(node)
    {
        var linksHere = node.querySelectorAll('a');
        for (const link of linksHere) {
            link.removeAttribute('aria-label');
            let inNewTab = document.createElement('span');
            inNewTab.classList.add('sr-only');
            inNewTab.classList.add('visually-hidden');
            inNewTab.innerText = '(відкривається в новій вкладці)';
            link.querySelector('span.a2a_label');
            link.appendChild(inNewTab);
        }
    }
}

class BugFixNumoSkillsSetCollapsedPseudoSectionsRND extends BugFixMultiple
{
    findAll()
    {
        var main = document.getElementById("main");
        if (main.className == "skill-page") {
            super.DOMNodes = main.querySelectorAll('.background-blured .container section');
        }
    }

    fixSingle(node)
    {
        node.role = 'group';
        var becomesButton = node.querySelector('.collapse-panel-caret');
        if (becomesButton) {
            nodeCollapsion = node.querySelector('div.collapse');
            becomesButton.role = 'button';
            becomesButton.setAttribute('aria-controls') = nodeCollapsion.id;
            becomesButton.setAttribute('aria-expanded') = 'false';
        }
    }
}

class BugFixLatinInUk extends BugFixMultiple
{
    findAll()
    {
        const htmlLang = document.documentElement.lang;
        if (htmlLang == 'uk') {
            //document.createTreeWalker(document.body, 0x1, getUk)
            // !!!stodo
        }
    }
}

class BugFixAriaCurrents extends BugFixMultiple
{
    findAll()
    {
        super.DOMNodes = document.querySelectorAll('a[href="' + location.pathname + '"');
    }

    fixSingle(node)
    {
        node.setAttribute('aria-current', 'page');
    }
}

class BugFixButtonNotConnectedToRealModal extends BugFix
{

    #nodeButton;
    #nodeBecomesModal;
    #newIdForButton;
    constructor(DOMNodeButton, DOMNodeBecomesModal, newIdForbutton = '')
    {
        super(DOMNodeButton);
        this.#nodeButton = DOMNodeButton;
        this.#nodeBecomesModal = DOMNodeBecomesModal;
        this.#newIdForButton = newIdForbutton;
    }

    fixCore()
    {
        this.#nodeBecomesModal.setAttribute('role','dialog');
        this.#nodeBecomesModal.setAttribute('aria-modal','true');
        if (!this.#nodeButton.id) {
            if (!this.#newIdForButton) {
                this.#newIdForButton = 'btn' + Math.random()
            }
            this.#nodeButton.id = this.#newIdForButton;
        }
        this.#nodeBecomesModal.setAttribute('aria-labelledby', this.#nodeButton.id);
    }
}

class BugFixNumoBotFixLinkForScreenReader extends BugFix
{
    fixCore()
    {
        super.DOMNode.removeAttribute('aria-label');
        super.DOMNode.firstElementChild.alt = 'Нумо-бот. Помічник для батьків дошкільняти. Каталог порад. Опитування. Корисні поради (відкривається в новій вкладці).';
    }
}

//var fixingScrollToBtnFocusing = new BuxFixScrolltoTopFocusing(document.getElementById('scrollToTopBtn'));
//fixingScrollToBtnFocusing.fix();

var fixingSkipLink = new BugIncorrectSkipLinkOnNumo(document.querySelector('.skip-link'));
fixingSkipLink.fix();

var fixingBlockLinks = new BugBlocksInA();
fixingBlockLinks.fix();

var fixingH1Complicated = new BugBlocksInH1();
fixingH1Complicated.fix();

var fixingBugSetHLvl = new BugFixAssignHeadingWithLvl(document.querySelector('main .background-blured .styled-title .line'));
fixingBugSetHLvl.fix();

var fixingA2A = new BugFixAddToAnyKitFixOpenInNewTab();
fixingA2A.fix();

var fixingRNDskilklsExpanding = new BugFixNumoSkillsSetCollapsedPseudoSectionsRND();
fixingRNDskilklsExpanding.fix();

var fixingQuizModal = new BugFixButtonNotConnectedToRealModal(document.querySelector('button[data-target="3"]'), document.querySelector('div[data-test="3"]'), 'quiz');
fixingQuizModal.fix();

var fixingNumoBotImg = new BugFixNumoBotFixLinkForScreenReader(document.querySelector('a[href="https://linktr.ee/numo_bot"]'));
fixingNumoBotImg.fix();

var fixingAriaCurrents = new BugFixAriaCurrents();
fixingAriaCurrents.fix();