<template>
  <div v-if="headShow" class="flex items-center px-4 py-1 sticky top-0 bg-white z-50 shadow-lg">
    <Icon name="mdi:close" class="text-[18px]" @click="changeShow(false)"></Icon>
    <img src="~/assets/images/app-icon-white.png" class="w-[50px] h-[50px] mx-2" alt="logo">
    <div class="flex-1">
      <div class=" font-bold">{{ $t('Vivid Wash 应用程序') }}</div>
      <div class="text-[12px] text-gray-500">{{ $t('轻松订购') }}</div>
      <div>
        <Icon name="mdi:star" class=" text-yellow-500 text-[18px]"></Icon>
        <Icon name="mdi:star" class=" text-yellow-500 text-[18px]"></Icon>
        <Icon name="mdi:star" class=" text-yellow-500 text-[18px]"></Icon>
        <Icon name="mdi:star" class=" text-yellow-500 text-[18px]"></Icon>
        <Icon name="mdi:star" class=" text-yellow-500 text-[18px]"></Icon>
      </div>
    </div>
    <van-button type="primary" class="!bg-gradient-to-b  from-[#3458A9] to-[#3FC2BD] min-w-[90px] !h-9 !rounded-[10px]"
      @click="openApp">{{ $t('打开') }}</van-button>
  </div>
</template>

<script setup lang="ts">
const { openApp } = useOpenAdd()
const { headShow, changeShow } = useHeadShow()
</script>
