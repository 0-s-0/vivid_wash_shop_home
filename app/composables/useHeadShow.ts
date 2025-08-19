const headShow = ref(true);

export const useHeadShow = () => {
  return {
    headShow,
    changeShow: (v: boolean) => {
      headShow.value = v
    }
  }
}