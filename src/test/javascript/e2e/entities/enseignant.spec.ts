import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Enseignant e2e test', () => {

    let navBarPage: NavBarPage;
    let enseignantDialogPage: EnseignantDialogPage;
    let enseignantComponentsPage: EnseignantComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Enseignants', () => {
        navBarPage.goToEntity('enseignant');
        enseignantComponentsPage = new EnseignantComponentsPage();
        expect(enseignantComponentsPage.getTitle())
            .toMatch(/Enseignants/);

    });

    it('should load create Enseignant dialog', () => {
        enseignantComponentsPage.clickOnCreateButton();
        enseignantDialogPage = new EnseignantDialogPage();
        expect(enseignantDialogPage.getModalTitle())
            .toMatch(/Create or edit a Enseignant/);
        enseignantDialogPage.close();
    });

    it('should create and save Enseignants', () => {
        enseignantComponentsPage.clickOnCreateButton();
        enseignantDialogPage.setIduserInput('5');
        expect(enseignantDialogPage.getIduserInput()).toMatch('5');
        enseignantDialogPage.userSelectLastOption();
        enseignantDialogPage.save();
        expect(enseignantDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class EnseignantComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-enseignant div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class EnseignantDialogPage {
    modalTitle = element(by.css('h4#myEnseignantLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    iduserInput = element(by.css('input#field_iduser'));
    userSelect = element(by.css('select#field_user'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setIduserInput = function(iduser) {
        this.iduserInput.sendKeys(iduser);
    }

    getIduserInput = function() {
        return this.iduserInput.getAttribute('value');
    }

    userSelectLastOption = function() {
        this.userSelect.all(by.tagName('option')).last().click();
    }

    userSelectOption = function(option) {
        this.userSelect.sendKeys(option);
    }

    getUserSelect = function() {
        return this.userSelect;
    }

    getUserSelectedOption = function() {
        return this.userSelect.element(by.css('option:checked')).getText();
    }

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
