/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
require('cypress-xpath');
const config = require('../../fixtures/config');

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit(config.URL_PHINCON)
  })

  it('verify displays default', () => {
    cy.xpath('//*[text()="Silahkan masukkan Nama Aplikasi"]').should('have.text', 'Silahkan masukkan Nama Aplikasi');
    cy.xpath('//div[@class="o3Dpx"]/div[1]//input[@class="whsOnd zHQkBf"]').should('exist');
    cy.xpath('//span[.="Silahkan pilih jenis Pengguna Aplikasi"]').should('have.text', 'Silahkan pilih jenis Pengguna Aplikasi');
    cy.xpath('//*[text()="Individu"]').should('have.text', 'Individu');
    cy.xpath('//*[text()="Korporasi"]').should('have.text', 'Korporasi');
    cy.xpath('//*[text()="Bearapa jumlah pengguna Aplikasi"]').should('have.text', 'Bearapa jumlah pengguna Aplikasi');
    cy.xpath('//*[text()="Kapan Aplikasi didirikan"]').should('have.text', 'Kapan Aplikasi didirikan');
  })
  
  it('Masukkan inputan yang valid dengan tipe individu', () => {
    cy.xpath('//div[@class="o3Dpx"]/div[1]//input[@class="whsOnd zHQkBf"]').type('PT MUFTI BERJAYA');
    cy.xpath('//*[text()="Individu"]').click();
    cy.xpath('//div[@class="o3Dpx"]/div[3]//input[@class="whsOnd zHQkBf"]').type('12345678');
    cy.xpath('//input[@type="date"]').type('1997-11-07');
    cy.xpath('//*[text()="Kirim"]').click();
    cy.xpath('//*[text()="Jawaban Anda telah direkam."]').should('exist');
  })
  
  it('Masukkan inputan yang valid dengan tipe Korporasi', () => {
    cy.xpath('//div[@class="o3Dpx"]/div[1]//input[@class="whsOnd zHQkBf"]').type('PT MUFTI BERJAYA');
    cy.xpath('//*[text()="Korporasi"]').click();
    cy.xpath('//div[@class="o3Dpx"]/div[3]//input[@class="whsOnd zHQkBf"]').type('12345678');
    cy.xpath('//input[@type="date"]').type('1997-11-07');
    cy.xpath('//*[text()="Kirim"]').click();
    cy.xpath('//*[text()="Jawaban Anda telah direkam."]').should('exist');
  })

  it('Submit form tanpa mengisi value pada field yang tersedia', () => {
    cy.xpath('//*[text()="Kirim"]').click();
    cy.xpath('//*[text()="Jawaban Anda telah direkam."]').should('not.exist'); //harusnya tidak berhasil submit
  })
  
  it('Submit form pada field jumlah pengguna aplikasi selain format number ', () => {
    cy.xpath('//div[@class="o3Dpx"]/div[1]//input[@class="whsOnd zHQkBf"]').type('PT MUFTI BERJAYA');
    cy.xpath('//*[text()="Korporasi"]').click();
    cy.xpath('//div[@class="o3Dpx"]/div[3]//input[@class="whsOnd zHQkBf"]').type('ABCDEFGHI');
    cy.xpath('//input[@type="date"]').type('1997-11-07');
    cy.xpath('//*[text()="Kirim"]').click();
    cy.xpath('//*[text()="Jawaban Anda telah direkam."]').should('not.exist'); //harusnya tidak berhasil submit
  })
  
  it('Submit form menggunakan invalid tipe tanggal', () => {
    cy.xpath('//div[@class="o3Dpx"]/div[1]//input[@class="whsOnd zHQkBf"]').type('PT MUFTI BERJAYA');
    cy.xpath('//*[text()="Korporasi"]').click();
    cy.xpath('//div[@class="o3Dpx"]/div[3]//input[@class="whsOnd zHQkBf"]').type('ABCDEFGHI');
    cy.xpath('//input[@type="date"]').type('abcdef');
    cy.xpath('//*[text()="Kirim"]').click();
    cy.xpath('//*[text()="Jawaban Anda telah direkam."]').should('not.exist'); //harusnya tidak berhasil submit
  })


})
