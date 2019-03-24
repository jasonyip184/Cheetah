<template>
    <div>
        <div style="text-align:right; margin-right:12%; font-family: Segoe UI;">
            Display rows:
            <select v-on:change="onPageSizeChanged()" id="page-size" style="border: 1px solid black; font-family: Segoe UI;">
                <option value="10" selected="">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>

        <ag-grid-vue style="margin-top:2%;"
                    class="ag-theme-balham"
                    id="myGrid"
                    :columnDefs="columnDefs"
                    :rowData="rowData"
                    :defaultColDef="defaultColDef"
                    :gridOptions="gridOptions"
                    @grid-ready="onGridReady"
                    :pagination="true"
                    :paginationPageSize="paginationPageSize"
                    :paginationNumberFormatter="paginationNumberFormatter"
                    :floatingFilter="true"
                    :masterDetail="true"
                    rowSelection="multiple"
                    :sideBar="sideBar"
                    :enableRangeSelection="true"
                    :statusBar="statusBar"
                    :detailCellRendererParams="detailCellRendererParams"
                    :detailRowHeight="detailRowHeight"
            >
        </ag-grid-vue>
    </div>

</template>

<script>
    import {AgGridVue} from "ag-grid-vue";
    import module_type_data from '../data/module_type_data.json';

    export default {
        name: 'App',
        data() {
            return {
                gridOptions: null,
                gridApi: null,
                columnDefs: null,
                rowData: null,
                paginationPageSize: null,
                paginationNumberFormatter: null,
                statusBar: null,
                detailCellRendererParams: null,
            }
        },
        components: {
            AgGridVue
        },
        beforeMount() {
            this.gridOptions = {};
            this.columnDefs = [
                {headerName: 'Module Code', field: 'ModuleCode', filter: "agTextColumnFilter", width: 100, cellRenderer: "agGroupCellRenderer"},
                {headerName: 'Module Title', field: 'ModuleTitle', filter: "agTextColumnFilter", width: 100},
                {headerName: 'Module Type', field: 'Type', width: 100},
                {headerName: 'Major of Students', field: 'Major', width: 100},
                {headerName: 'Latest From', field: 'YearSem', width: 100},
                {headerName: 'Assignments %', field: 'Assignments', filter: "agNumberColumnFilter", width: 100},
                {headerName: 'Class Participation %', field: 'Class Participation', filter: "agNumberColumnFilter", width: 100},
                {headerName: 'Project Work %', field: 'Project Work', filter: "agNumberColumnFilter", width: 100},
                {headerName: 'Exams %', field: 'Exams', filter: "agNumberColumnFilter", width: 100},
                {headerName: 'Enrolment', field: 'TotalEnrolment', filter: "agNumberColumnFilter", width: 100},
            ];

            this.rowData = module_type_data;
            this.defaultColDef = { resizable: true, filter: true, sortable: true, enablePivot: true, };
            this.paginationPageSize = 10;
            this.paginationNumberFormatter = params => {
                return params.value.toLocaleString();
            };
            this.statusBar = { statusPanels: [{ statusPanel: "agAggregationComponent" }] };
            this.detailCellRendererParams = {
                detailGridOptions: {
                },
                template: function(params) {
                    var moduledesc = params.data.ModuleDescription;
                    var moduledesc = (typeof moduledesc === 'undefined') ? "Currently Unavailable" : moduledesc;

                    var word1 = params.data.Lecture;
                    var word2 = params.data.Tutorial;
                    var word3 = params.data.Lab;
                    var word4 = params.data.Project;
                    var word5 = params.data.Preparation;
                    var word6 = params.data.Graded
                    return (
                    '<div style="padding:1%; text-align:left;">'+
                        '   <span style="white-space:normal; word-break:break-all;"> <b>Module Description:</b> '+moduledesc+'</span><br/><br/>'+
                        '   <div class="button-1">'+
                        '       <div class="eff-1"></div>'+
                        '       <a href="#/module">'+ "Find out more" +'</a>'+
                        '   </div>'+
                        '   <ul>'+
                        '       <li><h6> Expected hours per week:         </h6></li>'+
                        '       <li><div class="button-2">'+
                        '           <div class="eff-2"></div>'+
                        '           Lecture: <a href="#/">'+ word1 +'</a>'+
                        '       </div></li>'+
                        '       <li><div class="button-2">'+
                        '           <div class="eff-2"></div>'+
                        '           Tutorial: <a href="#/">'+ word2 +'</a>'+
                        '       </div></li>'+
                        '       <li><div class="button-2">'+
                        '           <div class="eff-2"></div>'+
                        '           Lab: <a href="#/">'+ word3 +'</a>'+
                        '       </div></li>'+
                        '       <li><div class="button-2">'+
                        '           <div class="eff-2"></div>'+
                        '           Project: <a href="#/">'+ word4 +'</a>'+
                        '       </div></li>'+
                        '       <li><div class="button-2">'+
                        '           <div class="eff-2"></div>'+
                        '           Preparation: <a href="#/">'+ word5 +'</a>'+
                        '       </div></li>'+
                        '       <li><div class="button-2">'+
                        '           <div class="eff-2"></div>'+
                        '           Graded: <a href="#/">'+ word6 +'</a>'+
                        '       </div></li>'+
                        '   </ul>'+
                    '</div>'
                    );
                }
            };
            this.detailRowHeight = 180;
        },
        mounted() {
            this.gridApi = this.gridOptions.api;
            this.gridColumnApi = this.gridOptions.columnApi;
        },
        methods: {
            // to select mods later
            onSelectionChanged() {
                var selectedRows = this.gridApi.getSelectedRows();
                var selectedRowsString = "";
            },
            onPageSizeChanged(newPageSize) {
                var value = document.getElementById("page-size").value;
                this.gridApi.paginationSetPageSize(Number(value));
            },
        }
    };


</script>

<style lang="scss">
    @import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
    @import "../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";

    .button-1{
        width:140px;
        height:30px;
        border:2px solid #21c03c;
        text-align:center;
        position:relative;
        overflow:hidden;
    }
    .button-1:hover .eff-1{
        left:0;
    }
    .eff-1{
        width:140px;
        height:30px;
        left:-140px;
        background:#21c03c;
        position:absolute;
        transition:all .5s ease;
    }
    .button-1 a{
        font-family:Helvetica;
        font-size:14px;
        color:#21c03c;
        text-decoration:none;
        line-height:30px;
        transition:all .5s ease;
        position:relative;
    }
    .button-1:hover a{
        color:#fff;
    }

    .button-2{
        width:100px;
        height:25px;
        border-radius: 25px;
        border:2px solid #1900ff;
        float:left;
        text-align:center;
        cursor:pointer;
        position:relative;
        box-sizing:border-box;
        overflow:hidden;
    }
    .button-2 a{
        font-family:Helvetica;
        font-size:10px;
        color:#1900ff;
        text-decoration:none;
        line-height:22px;
        transition:all .5s ease;
        position:relative;
    }
    .button-2:hover{
        background-color:#1900ff;
    }
    .button-2:hover a{
        color:#fff;
    }

    ul > li{
        display:inline-block;
    }

    ul {
        text-align: right;
    }
</style>