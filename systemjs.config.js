/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'angular2-qrcode':           'npm:angular2-qrcode/angular2-qrcode.js',
      'angular2-color-picker':     'npm:angular2-color-picker',

      'qrcode-generator':          'npm:qrcode-generator/qrcode.js',
      //'ng2-filter-pipe':           'npm:ng2-filter-pipe/dist/src/ng2-filter.pipe.js',
      // 'ng2-filter-pipe':           'npm:ng2-filter-pipe',
      'angular-calendar':          'npm:angular-calendar/dist/umd/angular-calendar.js', 
      'calendar-utils': 'npm:calendar-utils/dist/umd/calendarUtils.js',
      'angular-resizable-element': 'npm:angular-resizable-element/dist/umd/angular-resizable-element.js',
      'angular-draggable-droppable': 'npm:angular-draggable-droppable/dist/umd/angular-draggable-droppable.js',
      'ngx-color-picker':           'npm:ngx-color-picker',
      'date-fns':                   'npm:date-fns'
      //'ng2-qrcode':                 'npm:ng2-qrcode/dist/ng2-qrcode.js',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      // 'ng2-filter-pipe': {
      //   main: './dist/index.js',
      //   defaultExtension: 'js'
      // },
      'date-fns': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'ngx-color-picker': {
        main:'index.js', 
        defaultExtension: 'js'
      },
      'angular2-color-picker': {
        main:'index.ts', 
        defaultExtension: 'ts'
      }
    }
  });
})(this);
