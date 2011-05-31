/**
 * gChem: Chemistry Tools for Google(tm) Spreadsheets
 * Copyright (c) 2011 Metamolecular, LLC
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

function getCAS(id) {
 var content = lookup(id, 'cas');

 return content ? content : 'NOT FOUND';
};

function getSMILES(id) {
  var content = lookup(id, 'smiles');
  
  return content ? content : 'NOT FOUND';
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
