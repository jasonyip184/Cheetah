<template>
    <div>

      <b-row align-h="center">
      <div class="selectedHeader">
          <img v-b-popover.hover.topleft="tooltip" alt="Help" height="16" width="16" src="@/assets/help.png" />
          Selected Module:
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="selectedModule">{{selectedModuleText}}</div>
      </b-row>

      <b-row align-h="center" v-show="!isSelectionMade">
        <router-link :to="{ name: 'module' }" :event="isInvalidInputL">
          <b-button @click="updateCode" variant="success" :disabled="!isValidInput" class="searchButton"><div class="buttontext">Find Out More</div></b-button>
        </router-link>
      </b-row>

      <b-row align-h="center" v-show="isAdvertising">
        <b-col cols="3">
          <b-carousel
              id="advertising-industry-carousel"
              fade
              controls
              indicators
              :interval="3000"
          >
              <a href="https://www.ogilvy.com/careers/" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/advertising/ogilvy.png" v-b-popover.hover="'Ogilvy is a New York City-based British advertising, marketing, and public relations agency. It was founded in 1850 by Edmund Mather as a London-based agency. In 1964, the firm became known as Ogilvy & Mather after merging with a New York City agency that was founded in 1948 by David Ogilvy.'" title="Ogilvy"></b-carousel-slide></a>
              <a href="https://www.dentsuaegisnetwork.com/us/en/careers" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/advertising/dentsu.png" v-b-popover.hover="'Dentsu Inc. is a Japanese international advertising and public relations joint stock company headquartered in Tokyo. Dentsu is currently the fifth largest advertising agency network in the world in terms of worldwide revenues.'" title="Dentsu"></b-carousel-slide></a>
              <a href="https://www.wpp.com/careers" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/advertising/wpp.png" v-b-popover.hover="'WPP plc is a British multinational advertising and public relations company with its main management office in London, England, and its executive office in Dublin, Ireland.'" title="WPP"></b-carousel-slide></a>
              <a href="http://jobs.jobvite.com/bbdo/jobs" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/advertising/bbdo.png" v-b-popover.hover="'BBDO is a worldwide advertising agency network, with its headquarters in New York City. The agency began in 1891 with George Batten\'s Batten Company, and later in 1928, through a merger of BDO and Batten Co. the agency became Batten, Barton, Durstine & Osborn.'" title="BBDO" placement="right"></b-carousel-slide></a>
              <a href="https://www.publicisgroupe.com/en/the-groupe/careers/job-opportunities" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/advertising/publicis.png" v-b-popover.hover="'Publicis Groupe is a French multinational advertising and public relations company, and is the oldest and one of the largest marketing and communications companies in the world, by revenue, headquartered in Paris.'" title="Publicis"></b-carousel-slide></a>
          </b-carousel>
        </b-col>
      </b-row>

      <b-row align-h="center" v-show="isFinance">
        <b-col cols="3">
          <b-carousel
              id="finance-industry-carousel"
              fade
              controls
              indicators
              :interval="3000"
          >
              <a href="https://www.ubs.com/global/en/careers.html" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/finance/ubs.png" v-b-popover.hover="'UBS Group AG is a Swiss multinational investment bank and financial services company founded and based in Switzerland. Co-headquartered in the cities of Zürich and Basel, it maintains a presence in all major financial centers as the largest Swiss banking institution in the world.'" title="UBS" placement="right"></b-carousel-slide></a>
              <a href="https://group.bnpparibas/en/careers" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/finance/bnp.png" v-b-popover.hover="'BNP Paribas S.A. is a French international banking group. It is the world\'s 8th largest bank by total assets, and currently operates with a presence in 77 countries.'" title="BNP Paribas" placement="right"></b-carousel-slide></a>
              <a href="http://www.citigroup.com/Careers/index/#/" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/finance/citi.png" v-b-popover.hover="'Citigroup Inc. or Citi is an American multinational investment bank and financial services corporation headquartered in New York City. The company was formed by the merger of banking giant Citicorp and financial conglomerate Travelers Group in 1998; Travelers was subsequently spun off from the company in 2002.'" title="Citi" placement="right"></b-carousel-slide></a>
              <a href="https://www.sc.com/en/careers/" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/finance/standard.png" v-b-popover.hover="'Standard Chartered PLC is a British multinational banking and financial services company headquartered in London, England. It operates a network of more than 1,200 branches and outlets across more than 70 countries and employs around 87,000 people.'" title="Standard Chartered" placement="right"></b-carousel-slide></a>
              <a href="https://www.hsbc.com/careers" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/finance/hsbc.png" v-b-popover.hover="'HSBC, officially known as The Hongkong and Shanghai Banking Corporation Limited, is a wholly owned subsidiary of HSBC, the largest bank in Hong Kong, and operates branches and offices throughout the Asia Pacific region, and in other countries around the world.'" title="HSBC" placement="right"></b-carousel-slide></a>
          </b-carousel>
        </b-col>
      </b-row>

      <b-row align-h="center" v-show="isHealthcare">
        <b-col cols="3">
          <b-carousel
              id="healthcare-industry-carousel"
              fade
              controls
              indicators
              :interval="3000"
          >
              <a href="https://www.rafflesmedicalgroup.com/careers-at-raffles" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/healthcare/raffles.png" v-b-popover.hover="'Raffles Medical Group, is a private healthcare provider in Asia, operating medical facilities in thirteen cities in Singapore, China, Japan, Vietnam and Cambodia.'" title="Raffles Medical Group" placement="right"></b-carousel-slide></a>
              <a href="https://www.mckesson.com/careers/" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/healthcare/mckesson.png" v-b-popover.hover="'McKesson Corporation is an American company distributing pharmaceuticals and providing health information technology, medical supplies, and care management tools. The company had revenues of $208.4 billion in 2018.'" title="McKesson Corporation" placement="right"></b-carousel-slide></a>
              <a href="https://www.jobs.abbott/us/en" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/healthcare/abbott.png" v-b-popover.hover="'Abbott Laboratories is an American health care company with headquarters in Lake Bluff, Illinois, United States.'" title="Abbott Laboratories" placement="right"></b-carousel-slide></a>
              <a href="https://www.singhealth.com.sg/careers/opportunities-at-singhealth" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/healthcare/singhealth.png" v-b-popover.hover="'SingHealth is Singapore\'s largest group of healthcare institutions. The group was formed in 2000 and consists of four public hospitals, five national specialty centres and a network of eight polyclinics.'" title="SingHealth" placement="right"></b-carousel-slide></a>
              <a href="https://www.medtronic.com/us-en/about/careers.html" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/healthcare/medtronic.png" v-b-popover.hover="'Medtronic plc is the world\'s largest medical device company that generates the majority of its sales and profits from the U.S. healthcare system but is headquartered on the island of Ireland for tax purposes. Medtronic has an operational and executive headquarters in Fridley, Minnesota in the U.S.'" title="Medtronic" placement="right"></b-carousel-slide></a>
          </b-carousel>
        </b-col>
      </b-row>

      <b-row align-h="center" v-show="isConstruction">
        <b-col cols="3">
          <b-carousel
              id="construction-industry-carousel"
              fade
              controls
              indicators
              :interval="3000"
          >
              <a href="http://www.chcgroup.com.sg/index.php/projects-manager/" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/construction/n4.jpg" v-b-popover.hover="'CHC Construction Pte. Ltd., established in July 2005 by Laurence Liau, specialises in civil engineering work and has completed various projects with most government agencies including the Land Transport Authority, Housing of Development Board, Ministry of Education, Public Utilities Board, Urban Redevelopment Authority etc.'" title="CHC Construction Pte. Ltd." placement="right"></b-carousel-slide></a>
              <a href="http://gbco.com.sg/" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/construction/n3.jpg" v-b-popover.hover="'Grandeur Builders & Co talented team of interior designer and project managers can help you. Our service are perfect for both small and large businesses. Whether you are looking to upgrade your business for better efficiency and safety, or is looking to infuse your commercial space with a more innovative atmosphere.'" title="Grandeur Builders" placement="right"></b-carousel-slide></a>
              <a href="https://www.soilbuildconstruction.com/Career" target="_blank"><b-carousel-slide img-src="../assets/industry_slider/construction/n5.jpg" v-b-popover.hover="'Soilbuild Construction Group Ltd. (the “Group” or “Soilbuild”) is a leading builder with a long and successful track record of constructing a sterling award-winning portfolio of residential and business space properties. Since its inception in 1976, Soilbuild charts over 40 years of success in offering a full spectrum of real estate services which includes Civil Engineering, Design and Build, Construction, Turnkey Construction, Project Management Consultancy, Procurement and Mechanical & Electrical Installation. '" title="Soilbuild Construction Group Ltd." placement="right"></b-carousel-slide></a>
          </b-carousel>
        </b-col>
      </b-row>

      <!--
      <b-row align-h="center">
        <industry-slider v-bind:industry="industry"></industry-slider>
      </b-row>
      -->

      <b-row align-h="end">
        <b-col cols="2" align-h="start">
          <div class="tableHeader" style="display: inline">
              Display rows:
              <b-form-select v-on:change="onPageSizeChanged()" v-model="selectedRowSize" size="sm">
                <option :value="10">10</option>
                <option :value="20">20</option>
                <option :value="50">50</option>
                <option :value="100">100</option>
              </b-form-select>
          </div>
        </b-col>
      </b-row>


      <b-row align-h="center">
        <b-col cols="12">
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
                      rowSelection="single"
                      :sideBar="sideBar"
                      :enableRangeSelection="true"
                      :statusBar="statusBar"
                      :detailCellRendererParams="detailCellRendererParams"
                      :detailRowHeight="detailRowHeight"
                      @selection-changed="onSelectionChanged"
              >
          </ag-grid-vue>
        </b-col>
      </b-row>

    </div>
</template>

<script>
    import {AgGridVue} from "ag-grid-vue";
    import industry_data from '../data/industry_data.json';
    import module_data from '@/data/module_data.json';
    //import industry_slider from '@/components/IndustrySlider.vue';
    import { mapMutations } from 'vuex'

    export default {
        name: 'App',
        data() {
            return {
                modulelist: module_data['modulelist'],
                selectedRowSize: "10", //default value for row/page size
                selectedModuleCode: 'None',
                selectedModuleText: 'None',
                industry: 'None',
                tooltip: {
                  title: 'User Help',
                  content:
                  'Click any row in the results table to select a module. \n\n \
                  Click a column header to toggle between sorting that column in ascending/ descending order. \n\n \
                  Column widths can be adjusted. \n\n \
                  Columns can also be reordered by dragging them left/ right.'
                },
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
            //'industry-slider': industry_slider,
            AgGridVue
        },
        beforeMount() {
            this.gridOptions = {};
            this.columnDefs = [
                {headerName: 'Module Code', field: 'ModuleCode', filter: "agTextColumnFilter"},
                {headerName: 'Module Title', field: 'ModuleTitle', filter: "agTextColumnFilter",width:250},
                {headerName: 'Industry', field: 'Industry'},
                {headerName: 'Occupation', field: 'Occupation', width: 350},
                {headerName: 'Enrolment', field: 'TotalEnrolment', filter: "agNumberColumnFilter"},
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
            onSelectionChanged() {
                var selectedRows = this.gridApi.getSelectedRows();
                var selectedRowsStringCode = "";
                var selectedRowsStringText = "";
                var selectedRowsStringIndustry = "";
                selectedRows.forEach(function(selectedRow, index) { //flexible also for multiple selection
                  if (index !== 0) {
                    selectedRowsString += ", ";
                  }
                  selectedRowsStringCode += selectedRow.ModuleCode;
                  selectedRowsStringText += selectedRow.ModuleCode + ' ' + selectedRow.ModuleTitle
                  selectedRowsStringIndustry += selectedRow.Industry
                });
                this.selectedModuleCode = selectedRowsStringCode
                this.selectedModuleText = selectedRowsStringText
                this.industry = selectedRowsStringIndustry
            },
            onPageSizeChanged(newPageSize) {
                this.gridApi.paginationSetPageSize(this.selectedRowSize); //for new row size filter
            },
            ...mapMutations([
              'UPDATE_MODULE_CODE'
            ]),
            updateCode() {
              this.UPDATE_MODULE_CODE(this.selectedModuleCode)
            },
        },
        computed: {
          isSelectionMade(){
            return (this.selectedModuleCode == 'None')
          },
          isValidInput(){
            return (this.modulelist.includes(this.selectedModuleCode))
          },
          isInvalidInputL(){
            if (this.modulelist.includes(this.selectedModuleCode)) {
              return 'click'
            }
            else {
              return ''
            }
          },
          isHealthcare(){
              return (this.industry == 'Healthcare')
          },
          isFinance(){
              return (this.industry == 'Financial and Insurance')
          },
          isAdvertising(){
              return (this.industry == 'Advertisting, Media, Public Relations')
          },
          isConstruction(){
              return (this.industry == 'Construction')
          },
      }

    };


</script>

<style lang="scss">
    @import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
    @import "../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";

    .image-overlay {
      width: 100px;
      height: 100px;
      position: absolute;
      background-color: #003d7c;
      opacity: 0.5;
    }

    .selectedHeader {
      color: #424242;
      font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-weight: "330"; /**330;**/
      font-size: 27px;
      width: 100%;
      text-align: center;
      /**margin: 10px auto 10px;**/
    }

    .selectedModule {
      color: #3AAFA9 ;
      font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-weight: "bold";
      font-size: 35px;
      width: 100%;
      text-align: center;
      margin-top: -5px;
      margin-bottom: 0px;
      /**margin: 10px auto 10px;**/
    }

    .tableHeader {
      color: #0c69aa;
      font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-weight: 369; /**bold**/
      font-size: 16px;
      width: 100%;
      text-align: center;
      display: inline;
    }

    .searchButton {
      background: #E1E1E1;
      height: 30px;
      padding-bottom: 3px;
      padding-left: 8px;
      padding-right: 8px;
      border: #FF4040;
      border-radius: 2px;
      text-align: center;
      /**
      color: #fff;
      text-emphasis-color: #E27979;
      padding: 10px;
      margin: 5px;**/
    }

    .carousel-control-prev-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
    }

    .carousel-control-next-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
    }
    .buttontext {
      color: #F9F9F9;
      font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-weight: "bold"; /**330;**/
      font-size: 14px;
      margin-top: -2px;
    }

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
