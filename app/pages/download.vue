<template>
  <div class="flex flex-col h-screen pb-8">
    <img class="size-[140px] mx-auto mt-[32vw] mb-4" src="~/assets/images/logo.png" alt="logo" />
    <div class="p-6 text-gray-500 text-[13px]">
      {{ $t('Vivid wash description') }}
    </div>
    <div class="mt-auto flex flex-col items-center">
      <button class="w-[300px] border border-green-600 h-[44px] bg-green-600 rounded-full !text-white mb-4"
        @click="openApp">
        {{ $t('打开 Vivid wash') }}
      </button>
      <button class="w-[300px] border border-green-600 h-[44px] rounded-full !text-green-600 mb-4" @click="download">
        {{ $t('下载 Vivid wash') }}
      </button>
    </div>
    <div class="text-center text-gray-400">
      {{ $t('应用名') }}：Vivid wash <br />
      {{ $t('开发者') }}：Tailwind Trade
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const getMobileOS = (): "Android" | "iOS" | "unknown" => {
  const ua = navigator.userAgent;

  if (/android/i.test(ua)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(ua)) {
    return "iOS";
  }

  return "unknown";
};
const openApp = () => {
  // 安卓支持自定义跳转适配
  if (getMobileOS() === "Android") {
    window.location.href = `vividwash://?page=shopdetail&id=${route.query.id}`;
    showToast(t('正在跳转，请稍等...'));
    setTimeout(() => {
      download();
    }, 2000)
  } else {
    download();
  }
};
const download = () => {
  if (getMobileOS() === "iOS") {
    window.location.href = "https://apps.apple.com/app/vivid-wash/id6742226153";
  } else {
    window.location.href = "https://play.google.com/store/apps/details?id=com.tailwind.vivid1";
  }
};
onMounted(() => {
  getMobileOS();
});
</script>
