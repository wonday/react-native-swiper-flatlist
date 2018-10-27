describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should ...', async () => {
    await expect(element(by.id('paginationContainer'))).toBeVisible();

    await element(by.id('paginationId0')).tap();
    await expect(element(by.id('itemId0'))).toBeVisible();

    await element(by.id('paginationId1')).tap();
    await expect(element(by.id('itemId1'))).toBeVisible();

    await element(by.id('paginationId2')).tap();
    await expect(element(by.id('itemId2'))).toBeVisible();

    await element(by.id('paginationId3')).tap();
    await expect(element(by.id('itemId3'))).toBeVisible();

    await element(by.id('paginationId4')).tap();
    await expect(element(by.id('itemId4'))).toBeVisible();
  });
  it('should swipe screens', async () => {
    await element(by.id('containerSwiper')).swipe('left');
    await element(by.id('containerSwiper')).swipe('left');
    await element(by.id('containerSwiper')).swipe('left');
  });
});

// https://github.com/wix/Detox/blob/master/docs/APIRef.ActionsOnElement.md#swipedirection-speed-percentage

// 