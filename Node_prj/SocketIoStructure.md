

### socket.io-client  
[index.ts](https://github.com/socketio/socket.io-client/blob/master/lib/index.ts)  
[socket.ts](https://github.com/socketio/socket.io-client/blob/master/lib/socket.ts)  
[typed-events.ts](https://github.com/socketio/socket.io-client/blob/master/lib/typed-events.ts) 
[manager.ts](https://github.com/socketio/socket.io-client/blob/master/lib/manager.ts)  

export interface EventsMap {  
&nbsp; &nbsp; [event: string]: any;  
}  

export interface DefaultEventsMap {  
&nbsp; &nbsp; [event: string]: (...args: any[]) => void;  
}  


export class Manager{  
&nbsp; &nbsp; public engine: any;  
&nbsp; &nbsp; private readonly uri: string;  
&nbsp; &nbsp; constructor(uri?: string | Partial<ManagerOptions>,opts?: Partial<ManagerOptions>)  

&nbsp; &nbsp; 
}  

export class Socket{  
&nbsp; &nbsp; public readonly io: Manager<ListenEvents, EmitEvents>;  
&nbsp; &nbsp; 
&nbsp; &nbsp; 
&nbsp; &nbsp; 
&nbsp; &nbsp; 
&nbsp; &nbsp; 
}  




456
