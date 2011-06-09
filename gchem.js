/**
 * gChem: Chemistry Tools for Google(tm) Spreadsheets
 * Copyright (c) 2011 Metamolecular, LLC and Andrew S.I.D. Lang (asidlang@gmail.com)
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

function getmp(id) { // get experimental melting point
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

function getmc(solute,solvent) { // get experimental molar concentration
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