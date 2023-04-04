<script lang="ts" setup>
import { getUserInfo } from '~/api/userInfo'
import { ResOptions } from '~/utils/http'
import { IData } from '~/types/webConfig'
import { useUser } from '~/stores/user'
definePageMeta({
  layout: 'page',
})
const userInfo = useUser()
onMounted(() => {
  // const res = await getUserInfo<ResOptions<IData>>('')
  // userInfo.setStateValue({ webConfig: res.data })
  // console.log(res)
  const res = useAsyncData(async () => {
    const response = await fetch('http://120.48.80.108:9998')
    console.log(response, '=====')
  })
  // useFetch(fetch)
})
</script>

<template>
  <PageWrapper class="flex-1 flex">
    <!-- <div class="background-overlay"></div> -->
    <PageBody class="flex-1 flex">
      <PageSection class="flex-1 flex items-center"> </PageSection>
    </PageBody>
  </PageWrapper>
</template>
