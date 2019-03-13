<template>
  <div id="datatable">
    <v-client-table :data="data" :columns="columns" :options="options">
    </v-client-table>
  </div>
</template>

<script>
  import modules_data from '../data/modules_data_shortened.json';

  export default {
    data() {
      return {
        data: modules_data,
        options: {
          filterByColumn: true,
          headings: {
            ModuleCode: 'Module Code',
            ModuleTitle: 'Module Title',
            Department: 'Department',
            YearSem: 'Latest From',
            TotalEnrolment: 'Total Enrolment'
          },
          sortable: ['ModuleCode','ModuleTitle','Department','YearSem','TotalEnrolment'],
          filterable: ['ModuleCode','ModuleTitle','Department','YearSem','TotalEnrolment'],
          pagination: { chunk:10,dropdown:false }
        },
        columns: ['ModuleCode','ModuleTitle','Department','YearSem','TotalEnrolment'],
      }
    },
    name: "DataTable"
  }
</script>

<style scoped>
#datatable {
  margin: 3%;
}

.VueTables__date-filter {
  border: 1px solid #ccc;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
}
</style>