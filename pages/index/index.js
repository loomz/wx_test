Page({
  data: {
    activeTab: 'hot', // 默认选中热门推荐
    recommendItems: [] // 推荐内容数据
  },

  onLoad: function() {
    // 初始加载热门推荐内容
    this.loadRecommendItems('hot');
  },

  // 多图融合功能
  multiImageMerge: function() {
    wx.showToast({
      title: '多图融合功能',
      icon: 'success',
      duration: 1500
    });
  },

  // 图生图功能
  imageToImage: function() {
    wx.showToast({
      title: '图生图功能',
      icon: 'success',
      duration: 1500
    });
  },

  // 文生图功能
  textToImage: function() {
    wx.showToast({
      title: '文生图功能',
      icon: 'success',
      duration: 1500
    });
  },

  // 图生视频功能
  imageToVideo: function() {
    wx.showToast({
      title: '图生视频功能',
      icon: 'success',
      duration: 1500
    });
  },

  // 切换推荐内容页签
  switchRecommendTab: function(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
    // 加载对应页签的推荐内容
    this.loadRecommendItems(tab);
  },

  // 加载推荐内容数据
  loadRecommendItems: function(type) {
    // 模拟推荐内容数据
    let items = [];
    for (let i = 0; i < 20; i++) {
      items.push({
        url: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20interior%20design%20${type}%20style&image_size=square`,
        favorite: false
      });
    }
    this.setData({
      recommendItems: items
    });
  },

  // 切换收藏状态
  toggleFavorite: function(e) {
    const index = e.currentTarget.dataset.index;
    const items = this.data.recommendItems;
    items[index].favorite = !items[index].favorite;
    this.setData({
      recommendItems: items
    });
  }
});