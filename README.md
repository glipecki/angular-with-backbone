#### Warianty integracji

##### Integracja jako samodzielna biblioteka

Integracja aplikacji dostarczanej jako samodzielna biblioteka.

Przykład integracji:

```javascript
var form = window.FormWrapper.create(window.document.getElementById('wniosek'), 'Testowy wniosek');
form.on('demo', function(payload) { alert(JSON.stringify(payload)); });
```
Przykład wywołania z aplikacji Backbone w katalogu: _backbone-sample-1_.

Uruchomienie przykładu:
```bash
angular-with-backbone gregorry$ yarn start-demo1
yarn start-demo1 v0.21.3
$ node_modules/.bin/http-server backbone-sample-1 -p 9001 
Starting up http-server, serving backbone-sample-1
Available on:
  http://127.0.0.1:9001
  http://192.168.1.109:9001
Hit CTRL-C to stop the server
```

_Przed uruchomieniem należy zainstalować zależności node._