import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Etudiant e2e test', () => {

    let navBarPage: NavBarPage;
    let etudiantDialogPage: EtudiantDialogPage;
    let etudiantComponentsPage: EtudiantComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Etudiants', () => {
        navBarPage.goToEntity('etudiant');
        etudiantComponentsPage = new EtudiantComponentsPage();
        expect(etudiantComponentsPage.getTitle())
            .toMatch(/Etudiants/);

    });

    it('should load create Etudiant dialog', () => {
        etudiantComponentsPage.clickOnCreateButton();
        etudiantDialogPage = new EtudiantDialogPage();
        expect(etudiantDialogPage.getModalTitle())
            .toMatch(/Create or edit a Etudiant/);
        etudiantDialogPage.close();
    });

    it('should create and save Etudiants', () => {
        etudiantComponentsPage.clickOnCreateButton();
        etudiantDialogPage.setMoyenneInput('moyenne');
        expect(etudiantDialogPage.getMoyenneInput()).toMatch('moyenne');
        etudiantDialogPage.etudierSelectLastOption();
        etudiantDialogPage.userSelectLastOption();
        etudiantDialogPage.save();
        expect(etudiantDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class EtudiantComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-etudiant div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class EtudiantDialogPage {
    modalTitle = element(by.css('h4#myEtudiantLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    moyenneInput = element(by.css('input#field_moyenne'));
    etudierSelect = element(by.css('select#field_etudier'));
    userSelect = element(by.css('select#field_user'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setMoyenneInput = function(moyenne) {
        this.moyenneInput.sendKeys(moyenne);
    }

    getMoyenneInput = function() {
        return this.moyenneInput.getAttribute('value');
    }

    etudierSelectLastOption = function() {
        this.etudierSelect.all(by.tagName('option')).last().click();
    }

    etudierSelectOption = function(option) {
        this.etudierSelect.sendKeys(option);
    }

    getEtudierSelect = function() {
        return this.etudierSelect;
    }

    getEtudierSelectedOption = function() {
        return this.etudierSelect.element(by.css('option:checked')).getText();
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
