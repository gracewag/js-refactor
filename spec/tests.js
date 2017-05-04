describe("Allison's Inn Inventory System", function() {

  // example test:

  it("quality should degrade by 1 for regular items", function() {
    var items = [];
    items.push(new Item('Regular Item', 2, 10));
    update_quality(items);
    expect(items[0].quality).toBe(9);
  });

  // write more tests below to reach close to 100% code coverage before 
  // refactoring and adding new code to quality.js

  it('quality should increase by 1 for aged brie', function() {
      var items = [];
      items.push(new Item('Aged Brie', 2, 10));
      update_quality(items);
      expect(items[0].quality).toBe(11);
  });

  it('quality should increase by 1 for backstage passes', function() {
      var items = [];
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 20, 10));
      update_quality(items);
      expect(items[0].quality).toBe(11);
  });

  it('quality should increase by 2 for backstage passes with less than 10 sell_in', function() {
      var items = [];
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10));
      update_quality(items);
      expect(items[0].quality).toBe(12);
  });

  it('quality should increase by 3 for backstage passes with less than 5 sell_in', function() {
      var items = [];
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10));
      update_quality(items);
      expect(items[0].quality).toBe(13);
  });

  it('quality should be 0 for backstage passes with negative sell_in', function() {
      var items = [];
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10));
      update_quality(items);
      expect(items[0].quality).toBe(0);
  });
  
  it('quality degrades by 2 for regular items with negative sell_in', function() {
      var items = [];
      items.push(new Item('Regular Item', 0, 10));
      update_quality(items);
      expect(items[0].quality).toBe(8);
  });
  
  it('quality should not be less than 0', function() {
      var items = [];
      items.push(new Item('regular item', 2, 0));
      update_quality(items);
      expect(items[0].quality).toBe(0);
  });
  
  it('quality of aged brie does not get higher than 50', function() {
      var items = [];
      items.push(new Item('Aged Brie', 2, 50));
      update_quality(items);
      expect(items[0].quality).toBe(50);
  });
  
  it('quality of backstage passes does not get higher than 50', function() {
      var items = [];
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50));
      update_quality(items);
      expect(items[0].quality).toBe(50);
  });
  
  it('sulfuras should not change in sell_in or quality', function() {
      var items = [];
      items.push(new Item('Sulfuras, Hand of Ragnaros', 10, 80));
      update_quality(items);
      expect(items[0].quality).toBe(80);
      expect(items[0].sell_in).toBe(10);
  });
  
  it("sell_by should decrease by 1 for all items except sulfuras", function() {
      var items = [];
      items.push(new Item('Regular Item', 2, 10));
      items.push(new Item('Aged Brie', 2, 10));
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 2, 10));
      items.push(new Item('Sulfuras, Hand of Ragnaros', 2, 10));
      update_quality(items);
      expect(items[0].sell_in).toBe(1);
      expect(items[1].sell_in).toBe(1);
      expect(items[2].sell_in).toBe(1);
      expect(items[3].sell_in).toBe(2);
  });
  
  it('quality of aged brie increases by 2 with negative sell_in', function() {
      var items = [];
      items.push(new Item('Aged Brie', 0, 10));
      update_quality(items);
      expect(items[0].quality).toBe(12);
  });

});
