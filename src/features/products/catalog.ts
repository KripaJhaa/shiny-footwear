export type Product = {
  id: string
  name: string
  type: 'sneakers' | 'slides' | 'boots' | string
  price: number
  tag?: string
  color?: string
  visuals: string[]
}

export const initialCatalog: Product[] = [
  // Limited Edition Collection
  { id:'sx-luxe', name:'Luxe Limited Runner', type:'sneakers', price:199, tag:'Limited', color:'Gold/White', visuals:[
    'https://images.unsplash.com/photo-1584735174914-6b1272458e3e?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'sx-elite', name:'Elite Performance X', type:'sneakers', price:189, tag:'Premium', color:'Black/Gold', visuals:[
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1605408499391-6368c628ef42?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1605408499509-6018d46a6d98?auto=format&fit=crop&w=1200&h=900'
  ]},
  
  // Athletic Performance Series
  { id:'sx-sprint', name:'Sprint Elite Pro', type:'sneakers', price:159, tag:'Performance', color:'Blue/White', visuals:[
    'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'sx-marathon', name:'Marathon Master', type:'sneakers', price:169, tag:'Endurance', color:'Red/Black', visuals:[
    'https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1581093307443-a1e85e6c5c0e?auto=format&fit=crop&w=1200&h=900'
  ]},
  
  // Urban Style Collection
  { id:'sx-street', name:'Street Style Pro', type:'sneakers', price:129, tag:'Urban', color:'Gray/White', visuals:[
    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'sx-urban', name:'Urban Explorer', type:'sneakers', price:139, tag:'Trendy', color:'Black/White', visuals:[
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1603808033176-9d134e6f2c74?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1200&h=900'
  ]},
  
  // Comfort Series
  { id:'slp-cloud', name:'Cloud Walker Slides', type:'slides', price:59, tag:'Comfort', color:'White/Gray', visuals:[
    'https://images.unsplash.com/photo-1567347167012-29482aa7a9a8?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1567347167-02a73c5fec3c?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1567347167-82d6ea48242d?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'slp-foam', name:'Ultra Foam Comfort', type:'slides', price:45, tag:'Soft', color:'Black', visuals:[
    'https://images.unsplash.com/photo-1523289217630-0dd16184af8e?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1544156831-cce2c6408824?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1509647648544-a3e09b751ad6?auto=format&fit=crop&w=1200&h=900'
  ]},
  
  // Outdoor Adventure Series
  { id:'bt-trek', name:'Mountain Trek Pro', type:'boots', price:189, tag:'Adventure', color:'Brown', visuals:[
    'https://images.unsplash.com/photo-1553808373-92b0bcc3af15?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'bt-hike', name:'All-Terrain Explorer', type:'boots', price:179, tag:'Hiking', color:'Tan/Green', visuals:[
    'https://images.unsplash.com/photo-1606335543042-57c525922933?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1582897085656-c636d006a246?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&h=900'
  ]},
  
  // Summer Collection
  { id:'sd-beach', name:'Beach Paradise', type:'slides', price:39, tag:'Summer', color:'Blue/White', visuals:[
    'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1563005693-1cc52d7d7121?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1564417947365-8dbc9d0e0284?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'sd-coastal', name:'Coastal Comfort', type:'slides', price:42, tag:'Beach', color:'Aqua/White', visuals:[
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1584735174914-6b1272458e3e?auto=format&fit=crop&w=1200&h=900'
  ]},
  
  // Lifestyle Collection
  { id:'sx-daily', name:'Daily Comfort Plus', type:'sneakers', price:119, tag:'Everyday', color:'White/Beige', visuals:[
    'https://images.unsplash.com/photo-1554735490-5974588cbc4f?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'sx-casual', name:'Casual Elegance', type:'sneakers', price:129, tag:'Lifestyle', color:'Navy/White', visuals:[
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1576672843344-f01907a9d40c?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1200&h=900'
  ]},
  
  // Sport Performance
  { id:'sx-gym', name:'Gym Master Pro', type:'sneakers', price:149, tag:'Training', color:'Black/Red', visuals:[
    'https://images.unsplash.com/photo-1605408499391-6368c628ef42?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1605408499509-6018d46a6d98?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'sx-cross', name:'CrossFit Champion', type:'sneakers', price:159, tag:'Training', color:'Gray/Orange', visuals:[
    'https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1581093307443-a1e85e6c5c0e?auto=format&fit=crop&w=1200&h=900'
  ]},
  
  // Winter Collection
  { id:'bt-snow', name:'Snow Explorer', type:'boots', price:199, tag:'Winter', color:'Black/Gray', visuals:[
    'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1553808373-92b0bcc3af15?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1606335543042-57c525922933?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'bt-winter', name:'Winter Warrior', type:'boots', price:189, tag:'Winter', color:'Brown/Black', visuals:[
    'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1582897085656-c636d006a246?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1606335543042-57c525922933?auto=format&fit=crop&w=1200&h=900'
  ]},
  
  // Eco-Friendly Collection
  { id:'sx-eco', name:'EcoFlex Runner', type:'sneakers', price:149, tag:'Eco', color:'Green/White', visuals:[
    'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'sx-sustainable', name:'Sustainable Step', type:'sneakers', price:159, tag:'Eco', color:'Beige/Brown', visuals:[
    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1200&h=900'
  ]},
  
  // Kids Collection
  { id:'sx-kids', name:'Kids Adventure', type:'sneakers', price:89, tag:'Kids', color:'Multi', visuals:[
    'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'sx-volt', name:'Neon Boost Runner', type:'sneakers', price:129, tag:'New', color:'Neon Green/Black', visuals:[
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'sx-ice', name:'Cloud Walker Elite', type:'sneakers', price:119, tag:'Hot', color:'White/Gray', visuals:[
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'slp-comfort', name:'Urban Comfort Slides', type:'slides', price:49, tag:'Soft', color:'Gray/White', visuals:[
    'https://images.unsplash.com/photo-1624006389438-c03488175975?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1531578683658-7817c68b1912?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'slp-beach', name:'Summer Breeze Sandals', type:'slides', price:35, tag:'Cozy', color:'Tan/Brown', visuals:[
    'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1612813562440-3aa8c6128286?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1544659869-f9a6d5f8fb75?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'sx-run', name:'Street Sprint Pro', type:'sneakers', price:139, tag:'Featured', color:'Black/Red', visuals:[
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&h=900'
  ]},
  { id:'sx-hike', name:'Trail Blazer X', type:'boots', price:159, tag:'New', color:'Brown/Black', visuals:[
    'https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&h=900',
    'https://images.unsplash.com/photo-1542838937-86a929fc5148?auto=format&fit=crop&w=1200&h=900'
  ]}
]

export function validateCatalog(catalog: Product[] = initialCatalog){
  const errors: string[] = []
  const ids = new Set<string>()
  catalog.forEach((p, idx) => {
    if (!p || typeof p !== 'object') errors.push(`Item ${idx}: not an object`)
    if (!p.id || typeof p.id !== 'string') errors.push(`Item ${idx}: missing string id`)
    if (p.id && ids.has(p.id)) errors.push(`Duplicate id: ${p.id}`); else ids.add(p.id)
    if (!p.name || typeof p.name !== 'string') errors.push(`Item ${idx} (${p.id||'?'}) missing name`)
    if (typeof p.price !== 'number' || Number.isNaN(p.price)) errors.push(`Item ${idx} (${p.id||'?'}) price must be number`)
    if (!Array.isArray(p.visuals) || p.visuals.length === 0) errors.push(`Item ${idx} (${p.id||'?'}) visuals must be non-empty array`)
    if (Array.isArray(p.visuals)) {
      p.visuals.forEach((v, vi) => { if (typeof v !== 'string' || v.trim() === '') errors.push(`Item ${idx} (${p.id||'?'}) visual[${vi}] must be non-empty string`) })
    }
  })
  return { pass: errors.length === 0, errors }
}