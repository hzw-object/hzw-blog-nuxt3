<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
onMounted(async () => {
  const { data } = await useAsyncData('count', () =>
    $fetch('http://120.48.80.108:9998')
  )
})
</script>

<template>
  <PageWrapper class="flex-1 flex">
    <div class="background-overlay"></div>
    <PageBody class="flex-1 flex">
      <PageSection class="flex-1 flex items-center"> </PageSection>
    </PageBody>
  </PageWrapper>
</template>
