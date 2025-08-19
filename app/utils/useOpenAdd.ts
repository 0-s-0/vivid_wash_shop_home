export default () => {
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
  return { openApp };
}