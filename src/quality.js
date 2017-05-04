function update_quality(items) {
  for (var i = 0; i < items.length; i++) {
    items[i] = handleItem(items[i]);
  }
}

function handleItem(item)
{
    item.sell_in--;
    
    switch(item.name)
    {
        case 'Backstage passes to a TAFKAL80ETC concert':
            // special cases for backstage passes
            if(item.sell_in < 0)
            {
                item.quality = 0;
                break;
            }
            
            if(item.sell_in < 10)
            {
                item = improves(item);
                if(item.sell_in < 3)
                {
                    item = improves(item);
                }
            }
        
        case 'Aged Brie':
            item = improves(item);
            
            // won't improve backstage passes again because that's already 0 above
            if(item.sell_in < 0)
            {
                item = improves(item);
            }
            
            break;
        
        case 'Sulfuras, Hand of Ragnaros':
            item = legendary(item);
            break;
        
        case 'Conjured Item':
            item = degrades(item);
        
        default:
            item = degrades(item);
            break;
    }
    
    return item;
}

function improves(item)
{
    item.quality++;
    if(item.quality >= 50)
    {
        item.quality = 50;
    }
    
    return item;
}

function degrades(item)
{
    item.quality--;
    if(item.sell_in < 0)
    {
        item.quality--;
    }
    
    if(item.quality < 0)
    {
        item.quality = 0;
    }
    
    return item;
}

function legendary(item)
{
    item.sell_in++;
    return item;
}
