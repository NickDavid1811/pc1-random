<template>
  <pv-toolbar class="bg-primary">
    <template #start>
      <h1>About me</h1>
    </template>
    <template #center>
      <pv-icon-field iconPosition="left">
        <pv-input-icon>
          <i class="pi pi-search" />
        </pv-input-icon>
        <pv-input-text placeholder="Search" />
      </pv-icon-field>
    </template>

  </pv-toolbar>
</template>

<script>
export default {
  name: "toolbar"
}
</script>
