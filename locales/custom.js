/**
 * @file custom.js
 * @description Add custom text strings as variables for internationalization (i18n)
 * @param %v - Add this where you expect variable (dynamic) content. 
 * This will allow the translations to put it in the correct location
 * @param %p - Add this where you want to add pluralization. 
 * You'll need to provide the logic for this when the string is used.
 */

// NOTE: `String.raw` is used for entries with translation tokens (%v,%p) in the slight chance
// we/translators want to escape those exact strings visually in the dom (ex: \%v). 
// Adding this makes it so you don't have to double-escape due to default DOM behavior 
// (which a translator might not know about - single \ in normal strings are removed).
// Example: Allows: String.raw`Escaping \%v` instead of having to do: String.raw`Escaping \\%v`

var customLang = {
  lang: 'custom',
  columntypes: {
    editor: 'custom-Edit',
    remover: 'custom-Delete',
    selector: 'custom-Select',
  },
  context: {
    copyCell: 'custom-Copy Cell',
    pasteCell: 'custom-Paste Cell',
    insertRecordLabel: 'custom-Insert New Record',
    insertRecordHere: 'custom-Here',
    insertRecordEnd: 'custom-End',
    insertRecordStart: 'custom-Start',
    deleteRow: 'custom-Delete row',
    sortColumn: 'custom-Sort Column',
    editCell: 'custom-Edit Cell',
    editRow: 'custom-Edit Row',
    selectCell: 'custom-Select Cell',
    selectRow: 'custom-Select Row',
    deselect: 'custom-Deselect',
    previousPage: 'custom-Go to previous page',
    nextPage: 'custom-Go to next page',
    firstPage: 'custom-Go to first page',
    lastPage: 'custom-Go to last page',
    version: 'custom-ZingGrid Version',
    save: 'custom-Save',
    cancel: 'custom-Cancel',
  },
  date: {
    shortMonth: ['custom-Jan', 'custom-Feb', 'custom-Mar', 'custom-Apr', 'custom-May', 'custom-Jun', 'custom-Jul', 'custom-Aug', 'custom-Sep', 'custom-Oct', 'custom-Nov', 'custom-Dec'],
    longMonth: ['custom-January', 'custom-February', 'custom-March', 'custom-April', 'custom-May', 'custom-June', 'custom-July', 'custom-August', 'custom-September', 'custom-October', 'custom-November', 'custom-December'],
    twoWeek: ['custom-Su', 'custom-Mo', 'custom-Tu', 'custom-We', 'custom-Th', 'custom-Fr', 'custom-Sa'],
    shortWeek: ['custom-Sun', 'custom-Mon', 'custom-Tue', 'custom-Wed', 'custom-Thu', 'custom-Fri', 'custom-Sat'],
    longWeek: ['custom-Sunday', 'custom-Monday', 'custom-Tuesday', 'custom-Wednesday', 'custom-Thursday', 'custom-Friday', 'custom-Saturday'],
    am: 'custom-am',
    pm: 'custom-pm',
    startWeek: 0,
    startYear: 6,
  },
  dialog: {
    cancel: 'custom-Cancel',
    close: 'custom-X',
    confirm: 'custom-Confirm',
    create: 'custom-Create',
    delete: 'custom-Delete',
    ok: 'custom-Ok',
    recordCreate: {
      label: 'custom-Create a new record',
      successMsg: 'custom-Successfully added row!',
      errorMsg: 'custom-The server encountered an error and the record could not be created.',
    },
    recordDelete: {
      body: 'custom-Are you sure you want to delete this record?',
      label: 'custom-Confirm delete',
      successMsg: 'custom-Record removed successfully!',
      errorMsg: 'custom-The server encountered an error and the record could not be deleted.',
    },
    recordInfo: {
      label: 'custom-Record Info',
    },
    recordUpdate: {
      label: 'custom-Update this record',
      successMsg: 'custom-Record updated successfully',
      errorMsg: 'custom-The server encountered an error and the record could not be updated.',
    },
    fieldUpdate: {
      label: 'custom-Update this field',
      successMsg: 'custom-Field updated successfully',
      errorMsg: 'custom-The server encountered an error and the field could not be updated.',
 
    },
    removeXSelectedRows: {
      body: 'custom-Are you sure you want to delete these records?',
      label: 'custom-Remove %v record%p',
      successMsg: 'custom-Records removed successfully!',
    },
    version: {
      body: 'custom-built on',
      label: 'custom-Current Version',
    },
    save: 'custom-Save',
  },
  draggable: {
    remove: 'custom-Release to hide',
    reorder: 'custom-Drag outside grid to hide',
  },
  iconSet: {
    invalidVendor: 'custom-Value added to [%v] does not match allowed vendor list',
    invalidVendorMethod: 'custom-Internal Error: There was an issue loading [%v="%v"] icons. Falling back to default icons.',
  },
  loadMask: {
    title: 'custom-loading',
  },
  pagination: {
    page: 'custom-Page',
    pageOf: 'custom-of',
    rows: 'custom-Rows',
  },
  tools: {
    filter: 'custom-Filter',
    search: 'custom-Search',
    selected: 'custom-%v Item%p Selected',
  },
  tooltip: {
    layoutCard: 'custom-Card Layout',
    layoutRow: 'custom-Row Layout',
    recordCreate: 'custom-Insert Record',
    reload: 'custom-Reload Grid',
    editrecord: 'custom-Edit Record',
    firstpage: 'custom-Go to First Page',
    fixedmenu: 'custom-Open Menu',
    lastpage: 'custom-Go to Last Page',
    menu: 'custom-Open Column Menu',
    nextpage: 'custom-Go to Next Page', 
    prevpage: 'custom-Go to Previous Page',
    removerecord: 'custom-Remove Record',
    search: 'custom-Open Search',
  },
  watermark: {
    poweredBy: 'custom-Powered By <strong>ZingGrid</strong>',
  },
};