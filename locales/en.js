/**
 * @file en.js
 * @description Add english text strings as variables for internationalization (i18n)
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

export default {
  lang: 'en',
  columntypes: {
    editor: 'Edit',
    remover: 'Delete',
    selector: 'Select',
  },
  context: {
    copyCell: 'Copy Cell',
    pasteCell: 'Paste Cell',
    insertRecordLabel: 'Insert New Record',
    insertRecordHere: 'Here',
    insertRecordEnd: 'End',
    insertRecordStart: 'Start',
    deleteRow: 'Delete row',
    sortColumn: 'Sort Column',
    editCell: 'Edit Cell',
    editRow: 'Edit Row',
    selectCell: 'Select Cell',
    selectRow: 'Select Row',
    deselect: 'Deselect',
    previousPage: 'Go to previous page',
    nextPage: 'Go to next page',
    firstPage: 'Go to first page',
    lastPage: 'Go to last page',
    version: 'ZingGrid Version',
    save: 'Save',
    cancel: 'Cancel',
  },
  date: {
    shortMonth: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    longMonth: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    twoWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    shortWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    longWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    am: 'am',
    pm: 'pm',
    startWeek: 0,
    startYear: 6,
  },
  dialog: {
    cancel: 'Cancel',
    close: 'X',
    confirm: 'Confirm',
    create: 'Create',
    delete: 'Delete',
    ok: 'Ok',
    recordCreate: {
      label: 'Create a new record',
      successMsg: 'Successfully added row!',
      errorMsg: 'The server encountered an error and the record could not be created.',
    },
    recordDelete: {
      body: 'Are you sure you want to delete this record?',
      label: 'Confirm delete',
      successMsg: 'Record removed successfully!',
      errorMsg: 'The server encountered an error and the record could not be deleted.',
    },
    recordInfo: {
      label: 'Record Info',
    },
    recordUpdate: {
      label: 'Update this record',
      successMsg: 'Record updated successfully',
      errorMsg: 'The server encountered an error and the record could not be updated.',
    },
    fieldUpdate: {
      label: 'Update this field',
      successMsg: 'Field updated successfully',
      errorMsg: 'The server encountered an error and the field could not be updated.',

    },
    removeXSelectedRows: {
      body: 'Are you sure you want to delete these records?',
      label: 'Remove %v record%p',
      successMsg: 'Record%p removed successfully!',
    },
    version: {
      body: 'built on',
      label: 'Current Version',
    },
    save: 'Save',
  },
  draggable: {
    remove: 'Release to hide',
    reorder: 'Drag outside grid to hide',
  },
  iconSet: {
    invalidVendor: 'Value added to [%v] does not match allowed vendor list',
    invalidVendorMethod: 'Internal Error: There was an issue loading [%v="%v"] icons. Falling back to default icons.',
  },
  loadMask: {
    title: 'loading',
  },
  pagination: {
    page: 'Page',
    pageOf: 'of',
    rows: 'Rows',
  },
  tools: {
    filter: 'Filter',
    search: 'Search',
    selected: '%v Item%p Selected',
  },
  tooltip: {
    layoutCard: 'Card Layout',
    layoutRow: 'Row Layout',
    recordCreate: 'Insert Record',
    reload: 'Reload Grid',
    editrecord: 'Edit Record',
    firstpage: 'Go to First Page',
    fixedmenu: 'Open Menu',
    lastpage: 'Go to Last Page',
    menu: 'Open Column Menu',
    nextpage: 'Go to Next Page', 
    prevpage: 'Go to Previous Page',
    removerecord: 'Remove Record',
    search: 'Open Search',
  },
  watermark: {
    poweredBy: 'Powered By <strong>ZingGrid</strong>',
  },
};
