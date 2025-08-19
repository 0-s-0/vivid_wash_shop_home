<template>
  <div>
    <Download ref="downloadRef" />

    <!-- head -->
    <header class="w-full h-[250px] overflow-hidden">
      <NuxtImg class="w-full h-full block object-cover" :src="shop?.cover_image_uri" />
      <div class="h-[40px] bg-white w-full mt-[-30px] relative z-10" style="clip-path: ellipse(55% 100% at 50% 100%)" />
    </header>

    <div class="px-3">
      <!-- logo and title -->
      <div class="flex flex-col items-center -mt-22 relative z-10 mb-4">
        <NuxtImg class="size-[90px] rounded-xl mb-4" :src="shop?.imageUri" />
        <span class="text-[30px] font-bold line-clamp-2 font-[heavy] leading-[1.2] text-center mb-1">{{ shop?.name
        }}</span>
        <div class="text-[13px] flex items-center" @click="download">
          <Icon name="mdi:map-marker" class="text-[14px] mr-1 text-[#808080]" />
          <span class="line-clamp-1 bg-gradient-to-r from-[#B969FF] to-[#00DDD3] bg-clip-text text-transparent">{{
            shop?.address }}</span>
        </div>
      </div>

      <!-- commont -->
      <div class="bg-gradient-to-b from-[#F7FEF7] to-[#F1FFF1] rounded-lg p-2 pb-5 mb-5" @click="download">
        <div class="flex items-center -ml-2 -mt-2 mb-3">
          <div
            class="w-[64px] h-[38px] bg-[url('~/assets/images/score.png')] bg-cover flex-c font-bold text-[18px] font-[heavy] text-white pl-1">
            {{ shop?.best_star.toFixed(1) }}
          </div>
          <span class="text-[15px text-[#00C103] mx-1.5 flex-1">{{ shop?.best_review || $t("暂无评论") }}</span>
          <img class="w-[24px] h-[21px]" src="~/assets/images/comma.png" />
        </div>
        <div class="flex items-center justify-between">
          <span>"{{ shop?.serviceData.length }}+ {{ $t('服务') }} | {{ shop?.reviews.length }} {{ $t('位车主评论') }} "</span>
          <Icon name="mdi:chevron-right" class="text-[20px] mr-1" />
        </div>
      </div>

      <!-- time map share -->
      <div class="flex mb-4">
        <div
          class="h-[65px] flex-1 bg-[radial-gradient(ellipse_at_50%_50%,_#F8FEF8_0%,_#F1FFFD_100%)] bg-[#F6FCFE] rounded-lg p-3 flex items-center">
          <img class="size-[40px] mr-3" src="~/assets/images/car.png" alt="car" />
          <div class="flex flex-col">
            <span>{{ $t('时间') }}：{{
              dayjs(shop?.start_time, "HH:mm:ss").format("HH:mm") || "09:00"
            }}-{{
                dayjs(shop?.end_time, "HH:mm:ss").format("HH:mm") || "18:00"
              }}</span>
            <span v-if="shop?.status === 1" class="text-[#00C312]">
              {{ $t('营业中') }}
            </span>
            <span v-else class="text-red-400">
              {{ $t('已打烊') }}
            </span>
          </div>
        </div>
        <div class="w-[62px] h-[65px] bg-[url('~/assets/images/map-bg.png')] bg-cover mx-[9px] flex-c"
          @click="download">
          <img class="w-[35px] h-[33px]" src="~/assets/images/map-icon.png" alt="" />
        </div>
        <div class="w-[62px] h-[65px] rounded-lg flex-c bg-gradient-to-bl from-[#E8FEE9] to-[#E7FCFD]"
          @click="download">
          <img class="w-[35px] h-[33px] ml-3" src="~/assets/images/phone.png" alt="" />
        </div>
      </div>

      <!-- tabs -->
      <div ref="tabsRef" class="flex gap-4  sticky  bg-white z-50 py-2 mb-3 -mx-3 px-3 pl-4"
        :class="[headShow ? 'top-[70px]' : 'top-0', isTabsSticky ? 'shadow-lg' : '']">
        <div v-for="(item, index) in tabs" :key="item"
          class="bg-gradient-to-b transition select-none h-[40px] min-w-[116px] flex-c rounded-lg -skew-y-12 rotate-12 font-bold px-2"
          :class="tabsActive === index
            ? 'from-[#3551A4] to-[#2FBEB7] text-white'
            : 'from-[#F9F9F9] to-[#EAEAEA] text-[#969696]'
            " @click="tabsActive = index">
          <span class="skew-y-12 -rotate-12 text-[16px]">{{ item }}</span>
        </div>
      </div>

      <!-- 内容列表 -->
      <template v-if="tabsActive === 0">
        <van-empty v-if="shop?.packageData.length === 0" :description="$t('暂无套餐')" />
        <div v-for="item in shop?.packageData" :key="item.id"
          class="border-2 border-[#EEEEEE] rounded-lg mb-4 bg-gradient-to-b from-[#FFF] to-[#F1FFF1]" @click="download">
          <div class="py-3 px-3">
            <div class="font-[heavy] font-bold text-[20px] text-[#08A000] mb-3">
              {{ item.name }}
            </div>
            <ul class="text-[16px] text-[#333333]">
              <li v-for="services in item.serviceData" :key="services.id"> • {{ services.name }}</li>
            </ul>
          </div>
          <div class="bg-gradient-to-b py-2 px-4 from-[#3458A9] to-[#3FC2BD] rounded-lg text-[20px] text-white">
            RSD{{ item.price }}
          </div>
        </div>
      </template>
      <template v-else>
        <van-empty v-if="shop?.serviceData.length === 0" :description="$t('暂无服务')" />
        <div v-for="item in shop?.serviceData" :key="item.id"
          class="border-2 border-[#EEEEEE] rounded-lg mb-4 bg-gradient-to-b from-[#FFF] to-[#F1FFF1]" @click="download">
          <div class="py-3 px-3">
            <div class="font-[heavy] font-bold text-[20px] text-[#08A000] mb-3">
              {{ item.name }}
            </div>
            <div class="text-[16px] text-[#333333]">
              {{ item.description }}
            </div>
          </div>
          <div class="bg-gradient-to-b py-2 px-4 from-[#3458A9] to-[#3FC2BD] rounded-lg text-[20px] text-white">
            RSD{{ item.price }}
          </div>
        </div>
      </template>

    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import type { BusinessData, BusinessResponse } from "~/types/ShopRes";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Download from "~/components/Download.vue";
dayjs.extend(customParseFormat);
const route = useRoute();
const tabsActive = ref(0);
const { t } = useI18n();
const { openApp } = useOpenAdd()
const tabs = [t('套餐'), t('服务')];
const { headShow } = useHeadShow()
const tabsRef = ref<HTMLElement | null>(null)
const downloadRef = ref<InstanceType<typeof Download> | null>(null)
const isTabsSticky = ref(false);

// 数据请求
const shop = ref<BusinessData | null>(null);
const { data } = await useFetch<BusinessResponse>(
  `https://app.tailwindtrade.com/api/user/shop/${route.params.id}`
);
if (data.value?.success) {
  shop.value = data.value.data;
  const description = t('智能预约洗车，轻松焕然一新');
  const url = route.fullPath;
  const image = shop.value.cover_image_uri;
  const title = shop.value.name;
  useHead({
    title,
    link: [{ rel: "icon", type: "image/png", href: shop.value.imageUri }],
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        name: "keywords",
        content: `${title}, Vivid Wash, ${t('智能预约洗车')}, ${t('在线洗车支付')}, ${t('附近洗车优惠')}, ${t('快速车辆清洁')}`,
      },
      // Open Graph
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:locale", content: useNuxtApp().$i18n.locale.value },
      { property: "og:site_name", content: title },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
  });
}

const download = () => {
  openApp()
};
const handleScroll = () => {
  isTabsSticky.value = (tabsRef.value?.getBoundingClientRect().top ?? 0) <= (downloadRef.value?.$el.getBoundingClientRect ? downloadRef.value?.$el?.getBoundingClientRect().height : 0)
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>
