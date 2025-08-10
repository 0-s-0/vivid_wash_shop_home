<template>
  <div>
    <!-- head -->
    <header class="w-full h-[250px] overflow-hidden">
      <NuxtImg
        class="w-full h-full block object-cover"
        :src="shop?.cover_image_uri"
      />
      <div
        class="h-[40px] bg-white w-full mt-[-30px] relative z-10"
        style="clip-path: ellipse(55% 100% at 50% 100%)"
      />
    </header>

    <div class="px-3">
      <!-- logo and title -->
      <div class="flex flex-col items-center -mt-22 relative z-10 mb-4">
        <NuxtImg class="size-[90px] rounded-xl mb-4" :src="shop?.imageUri" />
        <span
          class="text-[30px] font-bold line-clamp-2 font-[heavy] leading-[1.2] text-center mb-1"
          >{{ shop?.name }}</span
        >
        <div class="text-[13px] flex items-center">
          <Icon name="mdi:map-marker" class="text-[14px] mr-1 text-[#808080]" />
          <span
            class="line-clamp-1 bg-gradient-to-r from-[#B969FF] to-[#00DDD3] bg-clip-text text-transparent"
            >{{ shop?.address }}</span
          >
        </div>
      </div>

      <!-- commont -->
      <div
        class="bg-gradient-to-b from-[#F7FEF7] to-[#F1FFF1] rounded-lg p-2 pb-5 mb-5"
      >
        <div class="flex items-center -ml-2 -mt-2 mb-3">
          <div
            class="w-[64px] h-[38px] bg-[url('~/assets/images/score.png')] bg-cover flex-c font-bold text-[18px] font-[heavy] text-white"
          >
            4.9
          </div>
          <span class="text-[15px text-[#00C103] mx-1.5 flex-1"
            >Super good reviews!</span
          >
          <img class="w-[24px] h-[21px]" src="~/assets/images/comma.png" />
        </div>
        <div class="flex items-center justify-between">
          <span>"282+ services | 31 car owner reviews "</span>
          <Icon name="mdi:chevron-right" class="text-[20px] mr-1" />
        </div>
      </div>

      <!-- time map share -->
      <div class="flex mb-6">
        <div
          class="h-[65px] flex-1 bg-[radial-gradient(ellipse_at_50%_50%,_#F8FEF8_0%,_#F1FFFD_100%)] bg-[#F6FCFE] rounded-lg p-3 flex items-center"
        >
          <img
            class="size-[40px] mr-3"
            src="~/assets/images/car.png"
            alt="car"
          />
          <div class="flex flex-col">
            <span
              >TIME：{{
                dayjs(shop?.start_time, "HH:mm:ss").format("HH:mm") || "09:00"
              }}-{{
                dayjs(shop?.end_time, "HH:mm:ss").format("HH:mm") || "18:00"
              }}</span
            >
            <span class="text-[#00C312]" v-if="shop?.status === 1">
              opening
            </span>
            <span class="text-red-400" v-else>closed</span>
          </div>
        </div>
        <div
          class="w-[62px] h-[65px] bg-[url('~/assets/images/map-bg.png')] bg-cover mx-[9px] flex-c"
        >
          <img
            class="w-[35px] h-[33px]"
            src="~/assets/images/map-icon.png"
            alt=""
          />
        </div>
        <div
          class="w-[62px] h-[65px] rounded-lg flex-c bg-gradient-to-bl from-[#E8FEE9] to-[#E7FCFD]"
        >
          <img
            class="w-[35px] h-[33px] ml-3"
            src="~/assets/images/phone.png"
            alt=""
          />
        </div>
      </div>

      <!-- tabs -->
      <div class="flex gap-4 mb-5">
        <div
          class="bg-gradient-to-b from-[#F9F9F9] to-[#EAEAEA] h-[40px] min-w-[116px] flex-c rounded-lg -skew-y-12 rotate-12 text-[#969696] font-bold px-2"
        >
          <span class="skew-y-12 -rotate-12 text-[16px]">Package</span>
        </div>
        <div
          class="bg-gradient-to-b from-[#F9F9F9] to-[#EAEAEA] h-[40px] min-w-[116px] flex-c rounded-lg -skew-y-12 rotate-12"
        >
          <span class="skew-y-12 -rotate-12 text-[18px">Package</span>
        </div>
      </div>
      <!-- 内容列表 -->
      <div
        v-for="item in 4"
        :key="item"
        class="border-2 border-[#EEEEEE] rounded-lg mb-4"
      >
        <div class="py-3 px-3">
          <div class="font-[heavy] font-bold text-[20px] text-[#08A000] mb-3">
            Contact Details 1
          </div>
          <div class="text-[16px] text-[#333333]">
            Pranje spoljasnjosti automobila kao i tretman ciscenja feelni i
            tockova
          </div>
        </div>
        <div
          class="bg-gradient-to-b py-2 px-4 from-[#3458A9] to-[#3FC2BD] rounded-lg text-[20px] text-white"
        >
          RSD 3700.00
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import type { BusinessData, BusinessResponse } from "~/types/ShopRes";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
useSeoMeta({
  title: "店铺详情",
});
const shop = ref<BusinessData | null>(null);
const { data } = await useFetch<BusinessResponse>(
  "https://app.tailwindtrade.com/api/user/shop/16"
);
if (data.value?.success) {
  shop.value = data.value.data;
}
console.log(data.value?.data);
</script>
