// import * as React from 'react';
// import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Edit, Toolbar, ContextMenu, Sort, Resize, ExcelExport, PdfExport, RowDD ,Filter,Freeze,ColumnChooser} from '@syncfusion/ej2-react-treegrid';
// import {summaryData} from "./data"

// function Tablegrid() {
//     const toolbarOptions = ['ColumnChooser'];
//     return (
//         <TreeGridComponent dataSource={summaryData} 
//         childMapping='subtask'
//         treeColumnIndex={1}
//         // allowPaging={true}
//         allowSorting={true}
//         allowFiltering={true}
//         frozenColumns={2}
//         showColumnChooser={true} toolbar={toolbarOptions}
//         allowSelection={false} allowResizing={true}

//         >
//             <Inject services={[Freeze,Sort,Filter, Toolbar, ColumnChooser]}/>
//             <ColumnsDirective>
//             <ColumnDirective field='ID' headerText='ID' width='90' textAlign='Right'> </ColumnDirective>
//             <ColumnDirective field='Name' headerText='Name' textAlign='Right'> </ColumnDirective>
//             <ColumnDirective field='category' headerText='category' textAlign='Right'> </ColumnDirective>
//             <ColumnDirective field='units' headerText='units'textAlign='Right' > </ColumnDirective>
//             <ColumnDirective field='units1' headerText='units'textAlign='Right' > </ColumnDirective>
//             <ColumnDirective field='units2' headerText='units'textAlign='Right' > </ColumnDirective>
//             <ColumnDirective field='units3' headerText='units'textAlign='Right' > </ColumnDirective>
//             <ColumnDirective field='unitPrice' headerText='unitPrice' textAlign='Right'> </ColumnDirective>
//             <ColumnDirective field='price' headerText='Price' format='C2' textAlign='Right'> </ColumnDirective>
//             <ColumnDirective field='priceE' headerText='PriceE' format='C2' textAlign='Right'> </ColumnDirective>
//             </ColumnsDirective>
//         </TreeGridComponent>
//     )
// }
// export default Tablegrid;


// import React from 'react';
// import { TreeGridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-treegrid';
// import './App.css';

// function Tablegrid() {
//   return (
//     <div className="treegrid-container">
//       <TreeGridComponent dataSource={data} allowPaging={false} scrollbarWidth={0}>
//         <ColumnsDirective>
//           <ColumnDirective field='taskID' headerText='Task ID' width='120'></ColumnDirective>
//           <ColumnDirective field='taskName' headerText='Task Name' width='200'></ColumnDirective>
//           <ColumnDirective field='startDate' headerText='Start Date' width='150'></ColumnDirective>
//           <ColumnDirective field='duration' headerText='Duration' width='120'></ColumnDirective>
//           <ColumnDirective field='progress' headerText='Progress' width='120'></ColumnDirective>
//         </ColumnsDirective>
//       </TreeGridComponent>
//     </div>
//   );
// }

// const data = [
//     {
//       taskID: 1,
//       taskName: 'Planning',
//       startDate: new Date('02/03/2021'),
//       duration: 3,
//       progress: 100
//     },
//     {
//       taskID: 2,
//       taskName: 'Design',
//       startDate: new Date('02/06/2021'),
//       duration: 5,
//       progress: 100
//     },
//     {
//       taskID: 3,
//       taskName: 'Implementation',
//       startDate: new Date('02/13/2021'),
//       duration: 10,
//       progress: 60
//     },
//     {
//       taskID: 4,
//       taskName: 'Testing',
//       startDate: new Date('02/24/2021'),
//       duration: 8,
//       progress: 40
//     },
//     {
//       taskID: 5,
//       taskName: 'Deployment',
//       startDate: new Date('03/04/2021'),
//       duration: 2,
//       progress: 0
//     }
//   ];

// export default Tablegrid;

// import * as React from 'react';
// import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Inject, ColumnChooser, Toolbar } from '@syncfusion/ej2-react-treegrid';


// function Tablegrid() {
//     const data = [
//         {
//           taskID: 1,
//           taskName: 'Planning',
//           startDate: new Date('02/03/2021'),
//           duration: 3,
//           progress: 100
//         },
//         {
//           taskID: 2,
//           taskName: 'Design',
//           startDate: new Date('02/06/2021'),
//           duration: 5,
//           progress: 100
//         },
//         {
//           taskID: 3,
//           taskName: 'Implementation',
//           startDate: new Date('02/13/2021'),
//           duration: 10,
//           progress: 60
//         },
//         {
//           taskID: 4,
//           taskName: 'Testing',
//           startDate: new Date('02/24/2021'),
//           duration: 8,
//           progress: 40
//         },
//         {
//           taskID: 5,
//           taskName: 'Deployment',
//           startDate: new Date('03/04/2021'),
//           duration: 2,
//           progress: 0
//         }
//       ];
//     const toolbarOptions = ['ColumnChooser'];
//     return (<div className='control-pane'>
//       <div className='control-section'>
//         <TreeGridComponent dataSource={data} treeColumnIndex={1} childMapping='subtasks' height='350' allowPaging={true} pageSettings={{ pageSize: 10 }} showColumnChooser={true} toolbar={toolbarOptions}>
//           <ColumnsDirective>
//             <ColumnDirective field='taskID' headerText='Task ID' width='100' textAlign='Right'></ColumnDirective>
//             <ColumnDirective field='taskName' headerText='Task Name' width='150' showInColumnChooser={false}></ColumnDirective>
//             <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right'/>
//             <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
//             <ColumnDirective field='progress' headerText='Progress' width='80' textAlign='Right'/>
//             <ColumnDirective field='priority' headerText='Priority' width='80'/>
//           </ColumnsDirective>
//           <Inject services={[Page, Toolbar, ColumnChooser]}/>
//         </TreeGridComponent>
//       </div>
//     </div>);
// }
// export default Tablegrid;



// import * as ReactDOM from 'react-dom';
// import * as React from 'react';
// import { TreeGridComponent, ColumnsDirective, ColumnDirective, Freeze, Inject, Resize, Sort } from '@syncfusion/ej2-react-treegrid';
// import {summaryData} from "./data"



// function Tablegrid() {
//     return (
//         <div className='control-pane'>

//             <div className='control-section'>
//                 <TreeGridComponent dataSource={summaryData}  allowSelection={false} allowResizing={true} allowSorting={true} childMapping='subtasks' treeColumnIndex={1} height='410' >
//                     <ColumnsDirective>
//                         <ColumnDirective field='taskID' headerText='Task ID' width='100' textAlign='Right'></ColumnDirective>
//                         <ColumnDirective field='taskName' headerText='Task Name' width='260'></ColumnDirective>
//                         <ColumnDirective field='startDate' headerText='Start Date' width='230' format='yMd' textAlign='Right'></ColumnDirective>
//                         <ColumnDirective field='endDate' headerText='End Date' width='230' format='yMd' textAlign='Right'></ColumnDirective>
//                         <ColumnDirective field='duration' headerText='Duration' width='210' textAlign='Right'></ColumnDirective>
//                         <ColumnDirective field='progress' headerText='Progress' width='210' textAlign='Right'></ColumnDirective>
//                         <ColumnDirective field='priority' headerText='Priority' width='230'></ColumnDirective>
//                         <ColumnDirective field='approved' headerText='Approved' textAlign='Center' width='230'></ColumnDirective>
//                     </ColumnsDirective>
//                     <Inject services={[Freeze, Resize, Sort]} />
//                 </TreeGridComponent>
//             </div>
//         </div>
//     )
// }
// export default Tablegrid;


// import * as React from 'react';
// import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Edit, Toolbar, ContextMenu, Sort, Resize, ExcelExport, PdfExport, RowDD ,Filter,Freeze,ColumnChooser} from '@syncfusion/ej2-react-treegrid';
// import {summaryData} from "./data"

// function Tablegrid() {
//     const toolbarOptions = ['ColumnChooser'];
//     return (
//         <TreeGridComponent dataSource={summaryData} 
//         childMapping='subtask'
//         treeColumnIndex={1}
//         // allowPaging={true}
//         allowSorting={true}
//         allowFiltering={true}
//         frozenColumns={2}
//         showColumnChooser={true} toolbar={toolbarOptions}
//         allowSelection={false} allowResizing={true}

//         >
//             <Inject services={[Freeze,Sort,Filter, Toolbar, ColumnChooser]}/>
//             <ColumnsDirective>
//             <ColumnDirective field='ID' headerText='ID' width='90' textAlign='Right'> </ColumnDirective>
//             <ColumnDirective field='Name' headerText='Name' textAlign='Right'> </ColumnDirective>
//             <ColumnDirective field='category' headerText='category' textAlign='Right'> </ColumnDirective>

//             <ColumnDirective field='priceE' headerText='PriceE' format='C2' textAlign='Right'> </ColumnDirective>
//             </ColumnsDirective>
//         </TreeGridComponent>
//     )
// }
// export default Tablegrid;

// <ColumnDirective field='units' headerText='units'textAlign='Right' > </ColumnDirective>
// <ColumnDirective field='units1' headerText='units'textAlign='Right' > </ColumnDirective>
// <ColumnDirective field='units2' headerText='units'textAlign='Right' > </ColumnDirective>
// <ColumnDirective field='units3' headerText='units'textAlign='Right' > </ColumnDirective>
// <ColumnDirective field='unitPrice' headerText='unitPrice' textAlign='Right'> </ColumnDirective>
// <ColumnDirective field='price' headerText='Price' format='C2' textAlign='Right'> </ColumnDirective>

// import * as React from 'react';
// import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-treegrid';
// import {summaryData} from "./data"
// import { PropertyPane } from './Property-pane';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
// function Tablegrid() {
//     let typeDropdownObj;
//     let modeDropdownObj;
//     let treegridObj;
//     const types = [
//         { id: 'Single', type: 'Single' },
//         { id: 'Multiple', type: 'Multiple' }
//     ];
//     const modes = [
//         { id: 'Row', mode: 'Row' },
//         { id: 'Cell', mode: 'Cell' },
//     ];
//     const cellmodes = [
//         { id: 'Flow', mode: 'Flow' },
//         { id: 'Box', mode: 'Box' }
//     ];
//     function typeChange(args) {
//         let type = args.value;
//         let mode = modeDropdownObj.value;
//         treegridObj.selectionSettings.type = type;
//         if (type === 'Multiple' && mode === 'Cell') {
//             document.getElementById('cellselection').style.display = 'table-row';
//         }
//         else {
//             document.getElementById('cellselection').style.display = 'none';
//         }
//     }
//     function modeChange(args) {
//         let mode = args.value;
//         let type = typeDropdownObj.value;
//         treegridObj.selectionSettings.mode = mode;
//         if (type === 'Multiple' && mode === 'Cell') {
//             document.getElementById('cellselection').style.display = 'table-row';
//         }
//         else {
//             document.getElementById('cellselection').style.display = 'none';
//         }
//     }
//     function cellmodeChange(args) {
//         let cellmode = args.value;
//         treegridObj.selectionSettings.cellSelectionMode = cellmode;
//     }
//     return (<div className='control-pane'>
//       <div className='control-section'>
//         <div className='col-md-9'>
//           <TreeGridComponent dataSource={summaryData} treeColumnIndex={1} childMapping='subtasks' height='350'  allowSelection={true} selectionSettings={{ type: 'Multiple' }} pageSettings={{ pageSize: 10 }} ref={treegrid => treegridObj = treegrid}>
//             <ColumnsDirective>
//               <ColumnDirective field='ID' headerText='ID' width='80' textAlign='Right'></ColumnDirective>
//               <ColumnDirective field='Name' headerText='Name' width='200'></ColumnDirective>
//               <ColumnDirective field='category' headerText='category' width='100' format='yMd' textAlign='Right'/>
//               <ColumnDirective field='units' headerText='Units' width='90' textAlign='Right'/>
//               <ColumnDirective field='price' headerText='price' width='90' textAlign='Right'/>
//             </ColumnsDirective>
//             <Inject services={[Page]}/>
//           </TreeGridComponent>
//         </div>
//         <div className='col-md-3 property-section'>
//           <PropertyPane title='Properties'>
//             <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
//               <tr>
//                 <td style={{ width: '30%' }}>
//                   <div style={{ paddingTop: '7px', paddingLeft: '2px' }}> Selection Type </div>
//                 </td>
//                 <td style={{ width: '70%', paddingRight: '10px' }}>
//                   <div>
//                     <DropDownListComponent width="100px" id="type" change={typeChange.bind(this)} dataSource={types} fields={{ text: 'type', value: 'id' }} value="Multiple" ref={dropdown => typeDropdownObj = dropdown}/>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td style={{ width: '30%', paddingLeft: '2px' }}>
//                   <div> Selection Mode </div>
//                 </td>
//                 <td style={{ width: '70%' }}>
//                   <div style={{ paddingRight: '10px', paddingBottom: '10px' }}>
//                     <DropDownListComponent width="100px" id="mode" change={modeChange.bind(this)} dataSource={modes} fields={{ text: 'mode', value: 'id' }} value="Row" ref={dropdown => modeDropdownObj = dropdown}/>
//                   </div>
//                 </td>
//               </tr>
//               <tr id='cellselection' style={{ display: 'none' }}>
//                 <td style={{ width: '30%' }}>
//                   <div> Cell Selection Mode </div>
//                 </td>
//                 <td style={{ width: '70%' }}>
//                   <div style={{ paddingRight: '10px', paddingBottom: '10px' }}>
//                     <DropDownListComponent width="100px" id="cellmode" change={cellmodeChange.bind(this)} dataSource={cellmodes} fields={{ text: 'mode', value: 'id' }} value="Flow"/>
//                   </div>
//                 </td>
//               </tr>
//             </table>
//           </PropertyPane>
//         </div>
//       </div>
//     </div>);
// }
// export default Tablegrid;




// import * as React from 'react';
// import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Edit, Toolbar, ContextMenu, Sort, Resize, ExcelExport, PdfExport, RowDD ,Filter,Freeze,ColumnChooser,TreeGrid} from '@syncfusion/ej2-react-treegrid';
// import {summaryData} from "./data"
// import { PropertyPane } from './Property-pane';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

// function Tablegrid() {

//     const toolbarOptions = ['ColumnChooser'];
//         let typeDropdownObj;
//     let modeDropdownObj;
//     let treegridObj;
//     const types = [
//         { id: 'Single', type: 'Single' },
//         { id: 'Multiple', type: 'Multiple' }
//     ];
//     const modes = [
//         { id: 'Row', mode: 'Row' },
//         { id: 'Cell', mode: 'Cell' },
//     ];
//     const cellmodes = [
//         { id: 'Flow', mode: 'Flow' },
//         { id: 'Box', mode: 'Box' }
//     ];
//     function typeChange(args) {
//         let type = args.value;
//         let mode = modeDropdownObj.value;
//         treegridObj.selectionSettings.type = type;
//         if (type === 'Multiple' && mode === 'Cell') {
//             document.getElementById('cellselection').style.display = 'table-row';
//         }
//         else {
//             document.getElementById('cellselection').style.display = 'none';
//         }
//     }
//     function modeChange(args) {
//         let mode = args.value;
//         let type = typeDropdownObj.value;
//         treegridObj.selectionSettings.mode = mode;
//         if (type === 'Multiple' && mode === 'Cell') {
//             document.getElementById('cellselection').style.display = 'table-row';
//         }
//         else {
//             document.getElementById('cellselection').style.display = 'none';
//         }
//     }
//     function cellmodeChange(args) {
//         let cellmode = args.value;
//         treegridObj.selectionSettings.cellSelectionMode = cellmode;
//     }
//     return (
//       <>
//         <TreeGridComponent dataSource={summaryData} 
//         childMapping='subtask'
//         treeColumnIndex={1}
//         // allowPaging={true}
//         allowSorting={true}
//         allowFiltering={true}
//         frozenColumns={2}
//         showColumnChooser={true} toolbar={toolbarOptions}
//         // allowSelection={false} 
//         allowResizing={true}
//         allowSelection={true}
//          selectionSettings={{ type: 'Multiple' }}
//           pageSettings={{ pageSize: 10 }}
//            ref={treegrid => treegridObj = treegrid}
//         filterSettings={{
//             ignoreAccent:true,
//             type:"Menu",
//             hierarchyMode:"None",
//             itemTemplate: "flagtemplate",





//         }}



//         >
//             <Inject services={[Freeze,Sort,Filter, Toolbar, ColumnChooser,Edit]}/>
//             <ColumnsDirective>
//             <ColumnDirective field='ID' headerText='ID' width='150' textAlign='Right'> </ColumnDirective>
//             <ColumnDirective field='Name' headerText='Name' textAlign='Right'> </ColumnDirective>
//             <ColumnDirective field='category' headerText='category' textAlign='Right'> </ColumnDirective>
//             <ColumnDirective field='units' headerText='units'textAlign='Right' > </ColumnDirective>
//             <ColumnDirective field='units1' headerText='units'textAlign='Right' > </ColumnDirective>
//             <ColumnDirective field='units2' headerText='units'textAlign='Right' > </ColumnDirective>
//             <ColumnDirective field='units3' headerText='units'textAlign='Right' > </ColumnDirective>
//             <ColumnDirective field='unitPrice' headerText='unitPrice' textAlign='Right'> </ColumnDirective>
//             <ColumnDirective field='price' headerText='Price' format='C2' textAlign='Right'> </ColumnDirective>
//             <ColumnDirective field='priceE' headerText='PriceE' format='C2' textAlign='Right'> </ColumnDirective>
//             </ColumnsDirective>
//         </TreeGridComponent>


//                 <div className='col-md-3 property-section'>
//           <PropertyPane title='Properties'>
//             <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
//               <tr>
//                 <td style={{ width: '30%' }}>
//                   <div style={{ paddingTop: '7px', paddingLeft: '2px' }}> Selection Type </div>
//                 </td>
//                 <td style={{ width: '70%', paddingRight: '10px' }}>
//                   <div>
//                     <DropDownListComponent width="100px" id="type" change={typeChange.bind(this)} dataSource={types} fields={{ text: 'type', value: 'id' }} value="Multiple" ref={dropdown => typeDropdownObj = dropdown}/>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td style={{ width: '30%', paddingLeft: '2px' }}>
//                   <div> Selection Mode </div>
//                 </td>
//                 <td style={{ width: '70%' }}>
//                   <div style={{ paddingRight: '10px', paddingBottom: '10px' }}>
//                     <DropDownListComponent width="100px" id="mode" change={modeChange.bind(this)} dataSource={modes} fields={{ text: 'mode', value: 'id' }} value="Row" ref={dropdown => modeDropdownObj = dropdown}/>
//                   </div>
//                 </td>
//               </tr>
//               <tr id='cellselection' style={{ display: 'none' }}>
//                 <td style={{ width: '30%' }}>
//                   <div> Cell Selection Mode </div>
//                 </td>
//                 <td style={{ width: '70%' }}>
//                   <div style={{ paddingRight: '10px', paddingBottom: '10px' }}>
//                     <DropDownListComponent width="100px" id="cellmode" change={cellmodeChange.bind(this)} dataSource={cellmodes} fields={{ text: 'mode', value: 'id' }} value="Flow"/>
//                   </div>
//                 </td>
//               </tr>
//             </table>
//           </PropertyPane>
//         </div>
// </>

//     )
// }
// export default Tablegrid;



// import * as React from 'react';
// import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Edit, Toolbar, ContextMenu, Sort, Resize, ExcelExport, PdfExport, RowDD, Filter, Freeze, ColumnChooser } from '@syncfusion/ej2-react-treegrid';
// import { summaryData } from "./data"

// function Tablegrid() {
//     const toolbarOptions = ['ColumnChooser'];
//     const treegridRef = React.createRef();

//     const handleContextMenuOpen = (args) => {
//         const { target } = args.event;
//         const treegrid = treegridRef.current;
//         if (treegrid.selectionModule.getSelectedRecords().length === 0) {
//             // If no records are selected, disable the Cut and Copy menu items
//             treegrid.contextMenuModule.enableItems(['Cut', 'Copy'], false);
//         } else {
//             treegrid.contextMenuModule.enableItems(['Cut', 'Copy'], true);
//         }
//         if (treegrid.editModule.clipboardData.length === 0) {
//             // If the clipboard is empty, disable the Paste menu item
//             treegrid.contextMenuModule.enableItems(['Paste'], false);
//         } else {
//             treegrid.contextMenuModule.enableItems(['Paste'], true);
//         }
//     }

//     return (
//         <TreeGridComponent
//             dataSource={summaryData}
//             childMapping='subtask'
//             treeColumnIndex={1}
//             allowSorting={true}
//             allowFiltering={true}
//             frozenColumns={2}
//             showColumnChooser={true}
//             toolbar={toolbarOptions}
//             allowSelection={true}
//             allowResizing={true}
//             editSettings={{ allowEditing: true, allowDeleting: true }}
//             ref={treegridRef}
//             contextMenuItems={[
//                 { text: 'Cut', iconCss: 'e-icons e-cut', id: 'Cut' },
//                 { text: 'Copy', iconCss: 'e-icons e-copy', id: 'Copy' },
//                 { text: 'Paste', iconCss: 'e-icons e-paste', id: 'Paste' },
//             ]}
//             contextMenuOpen={handleContextMenuOpen}
//         >
//             <Inject services={[Freeze, Sort, Filter, Toolbar, ColumnChooser]} />
//             <ColumnsDirective>
//                 <ColumnDirective field='ID' headerText='ID' width='90' textAlign='Right'></ColumnDirective>
//                 <ColumnDirective field='Name' headerText='Name' textAlign='Right'></ColumnDirective>
//                 <ColumnDirective field='category' headerText='category' textAlign='Right'></ColumnDirective>
//                 <ColumnDirective field='priceE' headerText='PriceE' format='C2' textAlign='Right'></ColumnDirective>
//             </ColumnsDirective>
//         </TreeGridComponent>
//     )
// }
// export default Tablegrid;




// import * as React from 'react';
// import { TreeGridComponent, ColumnsDirective, ColumnDirective,  Inject, Edit, Toolbar, ContextMenu, Sort,  Freeze, ColumnChooser, ContextMenuItems ,Filter} from '@syncfusion/ej2-react-treegrid';
// import { summaryData } from "./data"
// // import { PropertyPane } from './Property-pane';
// // import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';


// function Tablegrid() {

//   const toolbarOptions = ['ColumnChooser', 'Add', 'Edit', 'Delete', 'Update', 'Cancel'];
// let treegridObj
//   const editOption = {
//     allowEditing: true,
//     allowDeleting: true,
//     allowAdding: true,

//   }


//   return (
//     <>
//       <TreeGridComponent dataSource={summaryData}
//         childMapping='subtask'
//         treeColumnIndex={1}
//         // allowPaging={true}
//         allowSorting={true}
//         allowFiltering={true}
//         frozenColumns={2}
//         showColumnChooser={true} toolbar={toolbarOptions}
//         // allowSelection={false} 
//         allowResizing={true}
//         allowSelection={true}
//         selectionSettings={{ type: 'Multiple' }}
//         pageSettings={{ pageSize: 10 }}

//         filterSettings={{
//           ignoreAccent: true,
//           type: "Menu",
//           hierarchyMode: "None",
//           itemTemplate: "flagtemplate",





//         }}

//         editSettings={editOption}
//         contextMenuClick={(args) => {
//           if (args.item.id === 'cut') {
//               treegridObj.grid.copy();
//               treegridObj.grid.clearSelection();
//               treegridObj.grid.editModule.deleteRecord();
//           } else if (args.item.id === 'copy') {
//               treegridObj.grid.copy();
//           } else if (args.item.id === 'paste') {
//               treegridObj.grid.paste();
//           }
//       }}

//       >
//         <Inject services={[Freeze, Sort, Filter, Toolbar, ColumnChooser, Edit,ContextMenu]} />
//         <ColumnsDirective>
//           <ColumnDirective field='ID' headerText='ID' width='150' textAlign='Right'> </ColumnDirective>
//           <ColumnDirective field='Name' headerText='Name' textAlign='Right'> </ColumnDirective>
//           <ColumnDirective field='category' headerText='category' textAlign='Right'> </ColumnDirective>
//           <ColumnDirective field='units' headerText='units' textAlign='Right' > </ColumnDirective>
//           <ColumnDirective field='units1' headerText='units' textAlign='Right' > </ColumnDirective>
//           <ColumnDirective field='units2' headerText='units' textAlign='Right' > </ColumnDirective>
//           <ColumnDirective field='units3' headerText='units' textAlign='Right' > </ColumnDirective>
//           <ColumnDirective field='unitPrice' headerText='unitPrice' textAlign='Right'> </ColumnDirective>
//           <ColumnDirective field='price' headerText='Price' format='C2' textAlign='Right'> </ColumnDirective>
//           <ColumnDirective field='priceE' headerText='PriceE' format='C2' textAlign='Right'> </ColumnDirective>
//         </ColumnsDirective>
//       </TreeGridComponent>

 


//     </>

//   )
// }
// export default Tablegrid;


import * as React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective,  Inject, Edit, Toolbar, ContextMenu, Sort,  Freeze, ColumnChooser, ContextMenuItems ,Filter} from '@syncfusion/ej2-react-treegrid';
import { summaryData } from "./data"
import { Button } from 'bootstrap';
// import { PropertyPane } from './Property-pane';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function Tablegrid() {

  const toolbarOptions = ['ColumnChooser', 'Add', 'Edit', 'Delete', 'Update', 'Cancel'];
let treegridObj
  const editOption = {
    allowEditing: true,
    allowDeleting: true,
    allowAdding: true,
    mode: 'Batch'
  }


  // allowEditing: true, allowAdding: true, allowDeleting: true, 
  let grid;

  // const copy = () => {
  //   console.log(grid,"grid")
  //     if (grid) {
  //         grid.copy();
  //     }
  // };
  

  
  


  return (
    <>
        {/* <ButtonComponent onClick={copy}>Copy rich</ButtonComponent> */}
    
      <TreeGridComponent dataSource={summaryData}
        childMapping='subtask'
        treeColumnIndex={1}
        // allowPaging={true}
        allowSorting={true}
        allowFiltering={true}
        frozenColumns={0}
        showColumnChooser={true} toolbar={toolbarOptions}
        // allowSelection={false} 
        allowResizing={true}
        allowSelection={true}
        selectionSettings={{ type: 'Multiple',cellSelectionMode: 'Box',mode: 'Cell' }}
        pageSettings={{ pageSize: 10 }}

        filterSettings={{
          ignoreAccent: true,
          type: "Menu",
          hierarchyMode: "None",
          itemTemplate: "flagtemplate",

   



        }}
        ref={g => grid = g}
        editSettings={editOption}
      //   contextMenuClick={(args) => {
      //     if (args.item.id === 'cut') {
      //         treegridObj.grid.copy();
      //         treegridObj.grid.clearSelection();
      //         treegridObj.grid.editModule.deleteRecord();
      //     } else if (args.item.id === 'copy') {
      //         treegridObj.grid.copy();
      //     } else if (args.item.id === 'paste') {
      //         treegridObj.grid.paste();
      //     }
      // }
    // }

      >
        <Inject services={[Freeze, Sort, Filter, Toolbar, ColumnChooser, Edit,ContextMenu]} />
        <ColumnsDirective>
          <ColumnDirective field='ID' headerText='ID' width='150' textAlign='Right'> </ColumnDirective>
          <ColumnDirective field='Name' headerText='Name' textAlign='Right'> </ColumnDirective>
          <ColumnDirective field='category' headerText='category' textAlign='Right'> </ColumnDirective>
          <ColumnDirective field='units' headerText='units' textAlign='Right' > </ColumnDirective>
          <ColumnDirective field='units1' headerText='units' textAlign='Right' > </ColumnDirective>
          <ColumnDirective field='units2' headerText='units' textAlign='Right' > </ColumnDirective>
          <ColumnDirective field='units3' headerText='units' textAlign='Right' > </ColumnDirective>
          <ColumnDirective field='unitPrice' headerText='unitPrice' textAlign='Right'> </ColumnDirective>
          <ColumnDirective field='price' headerText='Price' format='C2' textAlign='Right'> </ColumnDirective>
          <ColumnDirective field='priceE' headerText='PriceE' format='C2' textAlign='Right'> </ColumnDirective>
        </ColumnsDirective>
      </TreeGridComponent>

 


    </>

  )
}
export default Tablegrid;