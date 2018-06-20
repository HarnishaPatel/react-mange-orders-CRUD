# react-mange-orders-CRUD
This is the application to manage requests repository.

To follow Single Responsibility Principle I have created various components.	
The hierarchy of Component is: 
  -	Requests
    -	FilterOrder
    -	OrderTable
      -	OrderTableRow
        -	PopOver. 
- To communicate between this component and to manage the state better I have implemented redux. Also utilized Redux store to handle data. 
- Create 3 types of actions to notify the reducer about the change request in store and actions needs to perform.  
- Dispatch an initial action that is Fetch_Orders only when the data is available. To handle those async activity implemented thunk     middlewear. 
- Worked on life cycle hooks of react components to dispatch an action before component will mount. 
- Handled conditional rendering so popover only popup when status is pending. 
- Filter the data by status and manage the smooth flow of data rendering I have implemented provider module from react-redux. And to map the props directly used connect method inside the component.
