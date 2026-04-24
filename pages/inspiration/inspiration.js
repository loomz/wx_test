Page({
  data: {
    activeTab: 'style', // 默认选中风格分类
    effectImages: [] // 效果图数据
  },

  onLoad: function() {
    // 初始加载风格分类的效果图
    this.loadEffectImages('style');
  },

  // 切换分类页签
  switchTab: function(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
    // 加载对应分类的效果图
    this.loadEffectImages(tab);
  },

  // 加载效果图数据
  loadEffectImages: function(category) {
    // 模拟不同分类的效果图数据
    let images = [];
    for (let i = 0; i < 30; i++) {
      images.push({
        url: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20interior%20design%20${category}%20style&image_size=square`
      });
    }
    this.setData({
      effectImages: images
    });
  }
});