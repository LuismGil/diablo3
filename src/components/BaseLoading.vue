<template>
  <div class="lading-wrapper text-center-py5">
    <div class="spinner-wrapper w-100">
      <b-spinner
        class="spinner"
        label="Loading..."
        :type="type"
        :variant="variant"
      />
    </div>
    <h1 class="my-5">Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  // Propiedades que soporta nuestro componente
  props: {
    variant: {
      required: false,
      type: String,
      // Valor por defecto, en caso de que no le pasemos esta prop
      default: 'info',
      validator: (value) => (
        [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark',
        ].includes(value)
      )
      ,
    },
    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => ['border', 'grow'].includes(value),
    },
  },
};
</script>

<style>
.spinner-wrapper .spinner {
  width: 4rem;
  height: 4rem;
}

</style>
