# evt.getEvt\[Attach\|Detach\]\(\)

`evt.getEvtAttach()` and `evt.getEvtDetach()` are accessors for `Evt<Handler<T, any>>` that posts every time a new handler is attached to/detached from the Evt&lt;T&gt;.

```typescript
import { Evt } from "evt";

const evtText= new Evt<string>();

function myCallback(text: string){};

evtText.getEvtAttach().attach(
    handler=> console.log(`${handler.callback.name} attached`)
);

evtText.getEvtDetach().attach(
    handler=> console.log(`${handler.callback.name} detached`)
);

//"myCallback attached" is printed to the console.
evtText.attach(callback);

//"myCallback detached" is printed to the console.
evtText.detach();
```

[**Run the example**](https://stackblitz.com/edit/evt-xwe67h?embed=1&file=index.ts&hideExplorer=1)

Thoses event are lazyly initializated for performance reasons but their post count is as if they where instantiated right from the start.

```typescript
import { Evt } from "evt";

const evtText = new Evt<string>();

evtText.attach(()=> {});

//Prints "1"
console.log(evtText.getEvtAttach().postCount);
```

\*\*\*\*[**Run the example**](https://stackblitz.com/edit/evt-i1rawj?embed=1&file=index.ts&hideExplorer=1)\*\*\*\*
