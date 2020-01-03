const { Builder, By, Key, until } = require("selenium-webdriver");

async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("http://localhost:3000");
    driver
      .manage()
      .window()
      .maximize();

    driver.findElement(By.id("btnEnseignant")).click();

    ajoutEnseignant = await driver.wait(
      until.elementLocated(By.id("ajoutEnseignant"))
    );

    ajoutEnseignant.click();

    const lastname = await driver.wait(until.elementLocated(By.name("nom")));
    lastname.click();
    await lastname.sendKeys("Temglit");

    const firstname = await driver.wait(
      until.elementLocated(By.name("prenom"))
    );
    firstname.click();
    await firstname.sendKeys("Nacera");

    ajouter = await driver.wait(until.elementLocated(By.id("ajouter")));
    await ajouter.click();
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Success");
  }
}
example();
