# Locale Files

A ZingGrid example showing how to use the internationalization feature by adding a custom language to your grid with a lang.js file.

We have two default files available in the library:

1. `en.js`
2. `es.js`

[![](http://capture.zingsoft.com/fd7ff054c976/download/Image%2525202019-10-21%252520at%2525204.06.37%252520PM.png)](https://app.zingsoft.com/demos/embed/PBBZ7KPQ)

## Defining A Custom Locale

You can define a custom locale two ways. First you can use es6 exports to define the object.

```javascript
export default {
  lang: 'es',
  columntypes: {
    editor: 'Editar',
    remover: 'Eliminar',
    selector: 'Seleccionar',
  },
  context: {
    copyCell: 'Copiar Celda',
    pasteCell: 'Pegar Celda',
    insertRecordLabel: 'Añadir Registro Nuevo',
    insertRecordHere: 'Aqui',
    insertRecordEnd: 'Al Final',
    insertRecordStart: 'Al Principio',
    deleteRow: 'Eliminar Fila',
    sortColumn: 'Ordenar Columna',
    editCell: 'Editar Celda',
    editRow: 'Editar Fila',
    selectCell: 'Seleccionar Celda',
    selectRow: 'Seleccionar Fila',
    deselect: 'Deseleccionar',
    previousPage: 'Regresar a la página anterior',
    nextPage: 'Ir a la página siguiente',
    firstPage: 'Regresar a la primera página',
    lastPage: 'Ir a la página final',
    version: 'Sobre ZingGrid',
    save: 'Guardar',
    cancel: 'Cancelar',
  }...
}
```

Second you can define the locale with a variable

```javascript
var esLocale = {
  lang: 'es',
  columntypes: {
    editor: 'Editar',
    remover: 'Eliminar',
    selector: 'Seleccionar',
  },
  context: {
    copyCell: 'Copiar Celda',
    pasteCell: 'Pegar Celda',
    insertRecordLabel: 'Añadir Registro Nuevo',
    insertRecordHere: 'Aqui',
    insertRecordEnd: 'Al Final',
    insertRecordStart: 'Al Principio',
    deleteRow: 'Eliminar Fila',
    sortColumn: 'Ordenar Columna',
    editCell: 'Editar Celda',
    editRow: 'Editar Fila',
    selectCell: 'Seleccionar Celda',
    selectRow: 'Seleccionar Fila',
    deselect: 'Deseleccionar',
    previousPage: 'Regresar a la página anterior',
    nextPage: 'Ir a la página siguiente',
    firstPage: 'Regresar a la primera página',
    lastPage: 'Ir a la página final',
    version: 'Sobre ZingGrid',
    save: 'Guardar',
    cancel: 'Cancelar',
  },
}
```

## Registering a Locale File

You will use the `ZingGrid.registerLanguage(obj, 'custom')` method to set 
the appropriate language. This will register the langauge globally to the page.

To instantiate the language you still have to define the language on the `html`, `zing-grid` or `zg-column` tag(s).