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
    import industry_data from '../data/industry_data.json';

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
                {headerName: 'Module Code', field: 'ModuleCode', filter: "agTextColumnFilter", width: 130},
                {headerName: 'Module Title', field: 'ModuleTitle', filter: "agTextColumnFilter", width: 130},
                {headerName: 'Industry', field: 'Industry', width: 130},
                {headerName: 'Occupation', field: 'Occupation', width: 130},
                {headerName: 'Enrolment', field: 'TotalEnrolment', filter: "agNumberColumnFilter", width: 130},
            ];

            this.rowData = industry_data;
            this.defaultColDef = { resizable: true, filter: true, sortable: true, enablePivot: true, };
            this.paginationPageSize = 10;
            this.paginationNumberFormatter = params => {
                return params.value.toLocaleString();
            };
            this.statusBar = { statusPanels: [{ statusPanel: "agAggregationComponent" }] };
            this.detailCellRendererParams = {
                detailGridOptions: {
                },
            };
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