/**
 * gChem: Chemistry Tools for Google(tm) Spreadsheets
 * Copyright (c) 2011 Metamolecular, LLC and Andrew S.I.D. Lang
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
 
/**
 * @author Richard L Apodaca - rapodaca@metamolecular.com
 * @author Andrew S.I.D. Lang - asidlang@gmail.com
 */

/**
 * Menu For All Functions - Requires identifier to be in the first column and the same row as selected cell
 * getmc requires the solute to be in the first column and the solvent to be in the second column and the same row as selected cell
 */

function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [ {name: "getImage", functionName: "InsertgetImage"},
                      {name: "getChemSpiderID", functionName: "InsertgetChemSpiderID"},
                      {name: "getCAS", functionName: "InsertgetCAS"},
                      {name: "getSMILES", functionName: "InsertgetSMILES"},
                      {name: "getSDF", functionName: "InsertgetSDF"},
                      {name: "getInChIKey", functionName: "InsertgetInChIKey"},
                      {name: "getInChI", functionName: "InsertgetInChI"},
                      {name: "getSynonyms", functionName: "InsertgetSynonyms"}];
  ss.addMenu("gChem", menuEntries);
  
  var cdkmenu = [ {name: "getALogP", functionName: "InsertgetALogP"},
                  {name: "getAMR", functionName: "InsertgetAMR"},
                  {name: "getbpol", functionName: "Insertgetbpol"},
                  {name: "getnHBAcc", functionName: "InsertgetnHBAcc"},
                  {name: "getnHBDon", functionName: "InsertgetnHBDon"},
                  {name: "getnAtomP", functionName: "InsertgetnAtomP"},
                  {name: "getnRotB", functionName: "InsertgetnRotB"},
                  {name: "getLipinskiFailures", functionName: "InsertgetLipinskiFailures"},
                  {name: "getTopoPSA", functionName: "InsertgetTopoPSA"},
                  {name: "getMW", functionName: "InsertgetMW"},
                  {name: "getXLogP", functionName: "InsertgetXLogP"}];
  ss.addMenu("gCDK", cdkmenu);
  
  var cdkmenu = [ {name: "getCSID", functionName: "InsertgetCSID"},
                  {name: "getCSImage", functionName: "InsertgetCSImage"},
                  {name: "getCSPredictedDensity", functionName: "InsertgetCSPredictedDensity"},
                  {name: "getMP", functionName: "Insertgetmp"},
                  {name: "getMC", functionName: "Insertgetmc"}];
  ss.addMenu("gONS", cdkmenu);
}

function InsertgetImage() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=image(getImageURL(' + sheet.getRange(r, 1).getA1Notation() + '))');
}

function InsertgetCSImage() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=image(getCSImageURL(' + sheet.getRange(r, 1).getA1Notation() + '))');
}

function InsertgetChemSpiderID() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getChemSpiderID(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetCSID() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getCSID(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetCAS() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getCAS(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetSMILES() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getSMILES(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetSDF() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getSDF(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetInChIKey() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getInChIKey(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetInChI() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getInChI(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetSynonyms() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getSynonyms(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function Insertgetmp() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getmp(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function Insertgetmc() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getmc(' + sheet.getRange(r, 1).getA1Notation() + ',' + sheet.getRange(r, 2).getA1Notation() + ')');
}

/**
 * CDK menu functions 
 */

function InsertgetALogP() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getALogP(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetAMR() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getAMR(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function Insertgetbpol() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getbpol(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetnHBAcc() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getnHBAcc(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetnHBDon() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getnHBDon(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetnAtomP() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getnAtomP(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetnRotB() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getnRotB(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetLipinskiFailures() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getLipinskiFailures(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetTopoPSA() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getTopoPSA(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetMW() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getMW(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

function InsertgetXLogP() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getXLogP(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

/**
 * ONS menu functions 
 */

function InsertgetCSPredictedDensity() {
 var sheet = SpreadsheetApp.getActiveSheet();
 var ac = sheet.getActiveCell();
 var r = ac.getRow();
 var c = ac.getColumn();
 sheet.getRange(r, c).setFormula('=getCSPredictedDensity(' + sheet.getRange(r, 1).getA1Notation() + ')');
}

/**
 * All Functions
 */

function getImageURL(id) {
  return 'http://cactus.nci.nih.gov/chemical/structure/' + id + '/image?width=150&height=150&format=png';
};

function getCSImageURL(id) {
  var content = lookup(id, 'chemspider_id');
  
  if (!content) {
    return 'NOT FOUND';
  }
  
  var csids = content.split('\n');
  return 'http://www.chemspider.com/image/' + csids[0];
};

function getChemSpiderID(id) {
  var content = lookup(id, 'chemspider_id');
  
  return content ? content : 'NOT FOUND';
};

function getCAS(id) {
 var content = lookup(id, 'cas');

 return content ? content : 'NOT FOUND';
};

function getSMILES(id) {
  var content = lookup(id, 'smiles');
  
  return content ? content : 'NOT FOUND';
};

function getSDF(id) {
  var content = lookup(id, 'sdf');
  
  return content ? content : 'NOT FOUND';
}

function getCSID(id) { // returns first ChemSpider ID
  var content = lookup(id, 'chemspider_id');
  
  if (!content) {
    return 'NOT FOUND';
  }
  
  var csids = content.split('\n');
  return csids[0];
};

function getMP(id) { // get experimental melting point
  var content = lookup(id, 'chemspider_id');
  
  if (!content) {
    return 'CSID NOT FOUND';
  }
  var csids = content.split('\n');
  var url = 'http://lxsrv7.oru.edu/~alang/meltingpoints/meltingpointwebservice.php?csid=' + csids[0];
  var result;
  
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
    if (!result) {
    return 'MP NOT FOUND';
    }
  } catch (error) {
    // do nothing
  }
  
  return result;
};

function getMC(solute,solvent) { // get experimental molar concentration
  var solutecsid = lookup(solute, 'chemspider_id');
  
  if (!solutecsid) {
    return 'SOLUTE CSID NOT FOUND';
  }
  var solutecsids = solutecsid.split('\n');
  
  var solventcsid = lookup(solvent, 'chemspider_id');
  
  if (!solventcsid) {
    return 'SOLVENT CSID NOT FOUND';
  }
  var solventcsids = solventcsid.split('\n');
  
  var url = 'http://old.oru.edu/cccda/sl/solubility/singlesolventcsid.php?solutecsid=' + solutecsids[0] + '&solventcsid=' + solventcsids[0];
  var result;
  
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
    if (!result) {
    return 'NO MEASUREMENT FOUND';
    }
  } catch (error) {
    // do nothing
  }
  
  return result;
};

function getInChIKey(id) {
  var content = lookup(id, 'stdinchikey');
  
  return content ? content.split('=')[1] : 'NOT FOUND';
};

function getInChI(id) {
  var content = lookup(id, 'stdinchi');
  
  return content ? content : 'NOT FOUND';
};

function getSynonyms(id) {
  var content = lookup(id, 'names');
  
  if (!content) {
    return 'NOT FOUND';
  }
  
  var names = content.split('\n');
  
  if (names.length <= 5) {
    return content;
  }
  
  names.splice(5);
  
  return names.join('\n') + '\n...';
};

function lookup(id, representation) {
  var url = 'http://cactus.nci.nih.gov/chemical/structure/' + id + '/' + representation;
  var result;
  
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  
  return result;
};

/**
 * CDK Functions
 */

function getALogP(id) {
  var content = lookup(id, 'smiles');
  
  if (!content) {
    return 'NOT FOUND';
  }
  var url = 'http://ws1.bmc.uu.se:8182/cdk/descriptor/org.openscience.cdk.qsar.descriptors.molecular.ALOGPDescriptor/' + encodeURIComponent(content);
  var result;
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  result = result.substr(result.indexOf("ALogP"));
  return result.substr(result.indexOf("value=")+7,result.indexOf("/>")-result.indexOf("value=")-9);
}

function getAMR(id) {
  var content = lookup(id, 'smiles');
  
  if (!content) {
    return 'NOT FOUND';
  }
  var url = 'http://ws1.bmc.uu.se:8182/cdk/descriptor/org.openscience.cdk.qsar.descriptors.molecular.ALOGPDescriptor/' + encodeURIComponent(content);
  var result;
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  result = result.substr(result.indexOf("AMR"));
  return result.substr(result.indexOf("value=")+7,result.indexOf("/>")-result.indexOf("value=")-9);
}

function getbpol(id) {
  var content = lookup(id, 'smiles');
  
  if (!content) {
    return 'NOT FOUND';
  }
  var url = 'http://ws1.bmc.uu.se:8182/cdk/descriptor/org.openscience.cdk.qsar.descriptors.molecular.BPolDescriptor/' + encodeURIComponent(content);
  var result;
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  return result.substr(result.indexOf("value=")+7,result.indexOf("/>")-result.indexOf("value=")-9);
}

function getnHBAcc(id) {
  var content = lookup(id, 'smiles');
  
  if (!content) {
    return 'NOT FOUND';
  }
  var url = 'http://ws1.bmc.uu.se:8182/cdk/descriptor/org.openscience.cdk.qsar.descriptors.molecular.HBondAcceptorCountDescriptor/' + encodeURIComponent(content);
  var result;
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  return result.substr(result.indexOf("value=")+7,result.indexOf("/>")-result.indexOf("value=")-9);
}

function getnHBDon(id) {
  var content = lookup(id, 'smiles');
  
  if (!content) {
    return 'NOT FOUND';
  }
  var url = 'http://ws1.bmc.uu.se:8182/cdk/descriptor/org.openscience.cdk.qsar.descriptors.molecular.HBondDonorCountDescriptor/' + encodeURIComponent(content);
  var result;
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  return result.substr(result.indexOf("value=")+7,result.indexOf("/>")-result.indexOf("value=")-9);
}

function getnAtomP(id) {
  var content = lookup(id, 'smiles');
  
  if (!content) {
    return 'NOT FOUND';
  }
  var url = 'http://ws1.bmc.uu.se:8182/cdk/descriptor/org.openscience.cdk.qsar.descriptors.molecular.LargestPiSystemDescriptor/' + encodeURIComponent(content);
  var result;
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  return result.substr(result.indexOf("value=")+7,result.indexOf("/>")-result.indexOf("value=")-9);
}

function getnRotB(id) {
  var content = lookup(id, 'smiles');
  
  if (!content) {
    return 'NOT FOUND';
  }
  var url = 'http://ws1.bmc.uu.se:8182/cdk/descriptor/org.openscience.cdk.qsar.descriptors.molecular.RotatableBondsCountDescriptor/' + encodeURIComponent(content);
  var result;
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  return result.substr(result.indexOf("value=")+7,result.indexOf("/>")-result.indexOf("value=")-9);
}

function getLipinskiFailures(id) {
  var content = lookup(id, 'smiles');
  
  if (!content) {
    return 'NOT FOUND';
  }
  var url = 'http://ws1.bmc.uu.se:8182/cdk/descriptor/org.openscience.cdk.qsar.descriptors.molecular.RuleOfFiveDescriptor/' + encodeURIComponent(content);
  var result;
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  return result.substr(result.indexOf("value=")+7,result.indexOf("/>")-result.indexOf("value=")-9);
}

function getTopoPSA(id) {
  var content = lookup(id, 'smiles');
  
  if (!content) {
    return 'NOT FOUND';
  }
  var url = 'http://ws1.bmc.uu.se:8182/cdk/descriptor/org.openscience.cdk.qsar.descriptors.molecular.TPSADescriptor/' + encodeURIComponent(content);
  var result;
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  return result.substr(result.indexOf("value=")+7,result.indexOf("/>")-result.indexOf("value=")-9);
}

function getMW(id) {
  var content = lookup(id, 'smiles');
  
  if (!content) {
    return 'NOT FOUND';
  }
  var url = 'http://ws1.bmc.uu.se:8182/cdk/descriptor/org.openscience.cdk.qsar.descriptors.molecular.WeightDescriptor/' + encodeURIComponent(content);
  var result;
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  return result.substr(result.indexOf("value=")+7,result.indexOf("/>")-result.indexOf("value=")-9);
}

function getXLogP(id) {
  var content = lookup(id, 'smiles');
  
  if (!content) {
    return 'NOT FOUND';
  }
  var url = 'http://ws1.bmc.uu.se:8182/cdk/descriptor/org.openscience.cdk.qsar.descriptors.molecular.XLogPDescriptor/' + encodeURIComponent(content);
  var result;
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  return result.substr(result.indexOf("value=")+7,result.indexOf("/>")-result.indexOf("value=")-9);
}

/**
 * ONS Functions
 */

function getCSPredictedDensity(id) {
  var content = lookup(id, 'chemspider_id');
 
  if (!content) {
    return 'NOT FOUND';
  }
  
  var csids = content.split('\n');
  var csid;
  csid = csids[0];
  
  var url = 'http://chemspider.com/' + csid;
  var result;
  try {
    var response = UrlFetchApp.fetch(url);
    result = response.getContentText();
  } catch (error) {
    // do nothing
  }
  result = result.substr(result.indexOf("<strong>Density</strong>"));
  return result.substr(result.indexOf("prop_value_nowrap")+19,result.indexOf("g/cm")-result.indexOf("prop_value_nowrap")-19);
}