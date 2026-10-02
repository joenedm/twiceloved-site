/* Twice Loved engine: Wedding DNA, vision picks, learning, budget, quantities, savings.
   Runs entirely in the browser. Estimates are labeled as estimates; nothing here claims a real listing. */
(function (W) {
  var TL = {};

  TL.PALETTES = [
    { id: 'dustyblue-ivory', name: 'Dusty blue + ivory', main: ['Dusty blue', '#8DA4BE'], second: ['Ivory', '#F4EFE4'], neutral: ['Soft white', '#FBFAF7'], metal: ['Silver', '#C9CED6'], tags: ['blue', 'coastal', 'romantic'] },
    { id: 'sage-champagne', name: 'Sage + champagne', main: ['Sage', '#9CAF88'], second: ['Champagne', '#EADCC2'], neutral: ['Ivory', '#F7F2E8'], metal: ['Gold', '#C9A54C'], tags: ['green', 'garden'] },
    { id: 'black-white', name: 'Black + white', main: ['Black', '#1E1E1E'], second: ['White', '#FFFFFF'], neutral: ['Dove grey', '#E4E4E1'], metal: ['Gold', '#C9A54C'], tags: ['formal', 'modern'] },
    { id: 'blush-gold', name: 'Blush + gold', main: ['Blush', '#E8BDB5'], second: ['Ivory', '#F7F0E6'], neutral: ['Cream', '#FBF7F0'], metal: ['Gold', '#C9A54C'], tags: ['romantic', 'pink'] },
    { id: 'lavender-silver', name: 'Lavender + silver', main: ['Lavender', '#B7A6D1'], second: ['Silver mist', '#E6E7EC'], neutral: ['White', '#FFFFFF'], metal: ['Silver', '#C9CED6'], tags: ['purple', 'whimsical'] },
    { id: 'terracotta-cream', name: 'Terracotta + cream', main: ['Terracotta', '#C2693E'], second: ['Cream', '#F6EEDF'], neutral: ['Sand', '#E8D9C4'], metal: ['Brass', '#B8913F'], tags: ['boho', 'warm'] },
    { id: 'burgundy-blush', name: 'Burgundy + blush', main: ['Burgundy', '#6B1E2E'], second: ['Blush', '#F2D4CF'], neutral: ['Ivory', '#F7F0E6'], metal: ['Gold', '#C9A54C'], tags: ['moody', 'romantic'] },
    { id: 'emerald-gold', name: 'Emerald + gold', main: ['Emerald', '#1F5E46'], second: ['Gold', '#D4B35F'], neutral: ['Ivory', '#F3EFE3'], metal: ['Gold', '#C9A54C'], tags: ['formal', 'green'] },
    { id: 'navy-white', name: 'Navy + white', main: ['Navy', '#22324F'], second: ['White', '#FFFFFF'], neutral: ['Pale blue', '#DCE6F1'], metal: ['Silver', '#C9CED6'], tags: ['classic', 'coastal'] },
    { id: 'white-greenery', name: 'All white + greenery', main: ['White', '#FFFFFF'], second: ['Greenery', '#7E9A6E'], neutral: ['Ivory', '#F4EFE4'], metal: ['Clear glass', '#DDE6EC'], tags: ['timeless', 'garden'] },
    { id: 'peach-sage', name: 'Peach + sage', main: ['Peach', '#F1B79A'], second: ['Sage', '#A9B99A'], neutral: ['Cream', '#FBF5EC'], metal: ['Gold', '#C9A54C'], tags: ['garden', 'warm'] },
    { id: 'bright', name: 'Bright + colorful', main: ['Marigold', '#F2C12E'], second: ['Coral', '#F28C68'], neutral: ['White', '#FFFFFF'], metal: ['Gold', '#C9A54C'], tags: ['colorful', 'playful'] },
    { id: 'burgundy-powder', name: 'Burgundy + powder blue', trend: true, main: ['Deep burgundy', '#6D1F2F'], second: ['Powder blue', '#A9C3DB'], neutral: ['Cloud white', '#F0EEE9'], metal: ['Gold', '#B8954F'], tags: ['moody', 'romantic', 'classic', 'red', 'blue'] },
    { id: 'plum-wasabi', name: 'Plum + wasabi green', trend: true, main: ['Jammy plum', '#5B2A4E'], second: ['Wasabi green', '#A8B545'], neutral: ['Cream', '#F3EFE6'], metal: ['Brass', '#A7864A'], tags: ['moody', 'garden', 'whimsical', 'purple', 'green'] },
    { id: 'cobalt-canary', name: 'Cobalt + canary yellow', trend: true, main: ['Cobalt blue', '#1F4FA3'], second: ['Canary yellow', '#F2D64B'], neutral: ['Crisp white', '#FFFFFF'], metal: ['Silver', '#C0C4CA'], tags: ['colorful', 'playful', 'coastal', 'modern', 'blue'] },
    { id: 'chartreuse-forest', name: 'Chartreuse + forest green', trend: true, main: ['Forest green', '#2F4A36'], second: ['Fresh chartreuse', '#C5D64A'], neutral: ['Linen', '#F4F1E8'], metal: ['Silver', '#BFC3C7'], tags: ['garden', 'modern', 'green', 'whimsical'] },
    { id: 'clouddancer-ivory', name: 'Cloud Dancer + vintage ivory', trend: true, main: ['Cloud Dancer white', '#F0EEE9'], second: ['Vintage ivory', '#E6D8BE'], neutral: ['Greige', '#D9D4CC'], metal: ['Champagne gold', '#C8A96A'], tags: ['timeless', 'minimal', 'elegant', 'white'] }
  ];
  TL.FEELINGS = ['Romantic', 'Timeless', 'Coastal', 'Breezy', 'Elegant', 'Relaxed', 'Candlelit', 'Whimsical', 'Dramatic', 'Garden-inspired', 'Modern', 'Classic', 'Intimate', 'Colorful', 'Warm', 'Formal', 'Rustic'];
  TL.SETTINGS = [['Oceanfront', 'Sand, salt air, the sound of waves'], ['Church', 'Stained glass, pews, tradition'], ['Garden', 'Blooms and green all around'], ['Backyard', 'Home, family, string lights'],
    ['Ballroom', 'Chandeliers and a big dance floor'], ['Barn', 'Wood beams and open doors'], ['Historic venue', 'A place with a story'], ['City venue', 'Skyline, loft, a little edge'],
    ['Lakeside', 'Still water at golden hour'], ['Mountain setting', 'Big views, cool air'], ['Country club', 'Green lawns, polished service'], ['Tent', 'A blank canvas under canvas'], ['Estate', 'Grand grounds and long drives']];
  TL.DAY = {
    arrive: { q: 'What do you want your guests to see when they first arrive?', o: ['Welcome sign', 'Florals', 'Candles', 'Vintage table', 'Seating display', 'Photos of us', 'Minimal entrance', 'Statement entrance'] },
    ceremony: { q: 'Now picture the moment you walk down the aisle. What surrounds you?', o: ['Aisle flowers', 'Candles', 'Lanterns', 'Ground arrangements', 'Pew decor', 'Arch', 'Arbor', 'Altar decor', 'Draped fabric', 'Simple and quiet', 'Dramatic and full'] },
    cocktail: { q: 'After the ceremony, what does celebrating with your guests feel like?', o: ['Card box', 'Guest book', 'Seating chart', 'Signature drink signs', 'Cocktail table decor', 'Photo display', 'Lounge area', 'Candles', 'Flowers', 'Memory table', 'Lawn games'] },
    reception: { q: 'Now picture everyone sitting down together. What does the room look like?', o: ['Round tables', 'Long tables', 'Linens', 'Runners', 'Chargers', 'Special plates', 'Gold or special flatware', 'Cloth napkins', 'Pretty glassware', 'Candles everywhere', 'Hurricane glasses', 'Bud vases', 'Tall centerpieces', 'Low centerpieces', 'Table numbers', 'Greenery', 'String or bistro lights'] },
    details: { q: 'What little details make this wedding feel like yours?', o: ['Sweetheart table', 'Head table', 'Cake display', 'Memorial table', 'Favor table', 'Photo display', 'Guest book area', 'Bathroom baskets', 'Late-night snacks', 'Custom signage', 'Card box', 'Family photos', 'A special tradition'] }
  };
  TL.DISLIKES = ['Gold', 'Silver', 'Mason jars', 'Pampas grass', 'Burlap', 'Rustic wood', 'Bright colors', 'Faux flowers', 'Overly formal decor', 'Minimalist decor', 'Glitter', 'Balloons', 'Neon signs', 'Chalkboard signs', 'Lots of pink', 'Tall centerpieces', 'Feathers', 'Sequins'];
  var DISLIKE_TAGS = { 'Gold': ['gold'], 'Silver': ['silver'], 'Mason jars': ['masonjar'], 'Pampas grass': ['pampas'], 'Burlap': ['burlap'], 'Rustic wood': ['wood', 'rustic'], 'Bright colors': ['bright'], 'Faux flowers': ['faux'],
    'Overly formal decor': ['formal', 'ornate'], 'Minimalist decor': ['minimal'], 'Glitter': ['glitter'], 'Balloons': ['balloon'], 'Neon signs': ['neon'], 'Chalkboard signs': ['chalkboard'], 'Lots of pink': ['pink'], 'Tall centerpieces': ['tall'], 'Feathers': ['feather'], 'Sequins': ['sequin'] };

  TL.QUICK = [
    [{ key: 'coastal', name: 'Salt air + candlelight', t: 'You hear the waves before you see them. Dusty blue linens, airy white florals, a hundred little candles in the breeze.', tags: ['coastal', 'romantic', 'candlelit', 'blue'], pal: 'dustyblue-ivory' },
     { key: 'garden', name: 'The secret garden', t: 'Guests wander through wildflowers in sage and champagne. Vintage glass catches the light and nobody wants to go inside.', tags: ['garden', 'vintage', 'relaxed', 'green'], pal: 'sage-champagne' },
     { key: 'formal', name: 'Black tie, all night', t: 'A grand ballroom in black and white, tall roses and gold. Everyone dressed up, and the dance floor never empties.', tags: ['formal', 'classic', 'elegant', 'gold'], pal: 'black-white' },
     { key: 'moody', name: 'Velvet + wine', t: 'Deep burgundy blooms, powder blue details and candlelight everywhere. Romantic, a little moody, totally unforgettable.', tags: ['moody', 'romantic', 'candlelit', 'red'], pal: 'burgundy-powder' },
     { key: 'garden', name: 'Jewel-toned orchard', t: 'Plum flowers and bright wasabi greens on long farm tables under the trees. Fresh, artsy and like nothing they have seen.', tags: ['garden', 'whimsical', 'moody', 'purple'], pal: 'plum-wasabi' },
     { key: 'coastal', name: 'Seaside summer party', t: 'Cobalt blue and sunny canary yellow, crisp white tents and lemons on every table. Pure happiness.', tags: ['coastal', 'colorful', 'playful', 'blue'], pal: 'cobalt-canary' },
     { key: 'barn', name: 'Barn lights + blush', t: 'Market lights strung across old wood beams, blush roses and gold. Cozy, warm and full of the people you love.', tags: ['rustic', 'romantic', 'relaxed', 'wood'], pal: 'blush-gold' },
     { key: 'formal', name: 'Soft + timeless', t: 'Cloud-white florals, vintage ivory and champagne gold. Clean, elegant and beautiful in photos forever.', tags: ['timeless', 'minimal', 'elegant', 'white'], pal: 'clouddancer-ivory' }],
    { coastal: [{ t: 'Barefoot on the sand with driftwood and linen', tags: ['relaxed', 'breezy', 'wood'] }, { t: 'A white tent by the water with crystal and taper candles', tags: ['elegant', 'timeless', 'formal'] }, { t: 'A lighthouse lawn with navy, stripes and lanterns', tags: ['classic', 'lantern'] }, { t: 'A yacht-club dinner with citrus and blue-and-white china', tags: ['classic', 'colorful', 'playful'] }],
      garden: [{ t: 'Overflowing blooms, long tables and mismatched china', tags: ['whimsical', 'vintage'] }, { t: 'Clean greenery, white roses and clear glass', tags: ['timeless', 'minimal'] }, { t: 'Golden hour, peach and terracotta, dried florals', tags: ['warm', 'boho', 'pampas'] }, { t: 'Hanging florals and candles in a glass greenhouse', tags: ['romantic', 'whimsical', 'candlelit'] }],
      formal: [{ t: 'Candlelit and moody, deep reds, velvet and brass', tags: ['moody', 'dramatic'] }, { t: 'Bright and crisp, all white florals and mirrors', tags: ['modern', 'minimal'] }, { t: 'Old-world romance, gilded frames and ivory roses', tags: ['romantic', 'ornate', 'gold'] }, { t: 'A city rooftop at night, skyline, black and silver', tags: ['modern', 'elegant', 'silver'] }],
      moody: [{ t: 'A candlelit castle hall with velvet linens', tags: ['dramatic', 'ornate', 'candlelit'] }, { t: 'A wine cellar dinner with garnet florals and dark wood', tags: ['moody', 'wood', 'warm'] }, { t: 'Burgundy and powder blue at a classic white chapel', tags: ['classic', 'church', 'traditional'] }, { t: 'An autumn orchard with deep reds and plum', tags: ['garden', 'warm', 'rustic'] }],
      barn: [{ t: 'Hay bales, lanterns and a big bonfire after', tags: ['rustic', 'lantern', 'relaxed'] }, { t: 'A white barn with chandeliers and crystal', tags: ['elegant', 'romantic', 'ornate'] }, { t: 'Wildflowers in mason jars and a whiskey bar', tags: ['rustic', 'relaxed', 'masonjar'] }, { t: 'Long wood tables, taper candles and greenery runners', tags: ['wood', 'candlelit', 'timeless'] }] }
  ];

  /* Vision variants per area. tags drive matching; avoid tags must not appear. items feed budget + "Find this look". */
  TL.AREAS = [
    { k: 'ceremony', name: 'Ceremony', kick: 'where you say I do', v: [
      { t: 'A round arch draped in soft {second} fabric with loose {flower} gathered at one side', tags: ['romantic', 'garden', 'coastal', 'arch', 'fabric'], items: [['Round metal arch', 1, 140, 55], ['Draping fabric panels', 2, 40, 18], ['Faux floral swag', 2, 90, 35]] },
      { t: 'A simple wooden arbor wrapped in greenery with candles lining the aisle', tags: ['rustic', 'wood', 'relaxed', 'arch', 'candles'], items: [['Wood arbor', 1, 180, 70], ['Greenery garland', 4, 30, 12], ['Pillar candles', 12, 6, 2.5]] },
      { t: 'No arch at all: a line of grounded {flower} arrangements and glass lanterns framing the two of you', tags: ['modern', 'timeless', 'elegant', 'ground', 'lantern'], items: [['Ground floral arrangements', 2, 220, 80], ['Glass lanterns', 8, 30, 12]] },
      { t: 'Church elegance: pew bows of {main} ribbon and greenery, with tall candles at the altar', tags: ['church', 'classic', 'formal', 'candles', 'traditional'], items: [['Pew decorations', 12, 25, 8], ['Altar candle stands', 2, 60, 25]] },
      { t: 'A hexagon arch with pampas and dried florals in warm tones', tags: ['boho', 'pampas', 'wood', 'arch'], items: [['Hexagon arch', 1, 160, 60], ['Dried floral swag', 2, 80, 35]] }] },
    { k: 'tablescape', name: 'Tablescape', kick: 'where everyone gathers', v: [
      { t: '{main} cheesecloth runners over ivory linens, clear glassware and {metal} flatware', tags: ['romantic', 'relaxed', 'coastal', 'garden', 'runner'], items: [['Cheesecloth runners', 'tables', 18, 7], ['Clear water goblets', 'guests', 3, 1.1]] },
      { t: 'Crisp white linens, {metal} chargers and cloth napkins tied with a sprig of greenery', tags: ['classic', 'formal', 'elegant', 'timeless', 'charger'], items: [['Chargers', 'guests', 4, 1.2], ['Cloth napkins', 'guests', 3, 1]] },
      { t: 'Bare wood farm tables with mismatched vintage china and linen napkins', tags: ['rustic', 'vintage', 'wood', 'whimsical'], items: [['Vintage plates (mixed)', 'guests', 4, 1.3], ['Linen napkins', 'guests', 3, 1]] },
      { t: 'Black and white: {main} napkins, white plates and slim taper candles in a straight line', tags: ['modern', 'minimal', 'formal'], items: [['Napkins', 'guests', 2.5, 0.9], ['Taper holders', 'tables', 12, 4]] }] },
    { k: 'centerpiece', name: 'Centerpieces', kick: 'the heart of every table', v: [
      { t: 'Clear hurricane glasses with ivory pillar candles, ringed with loose {flower} and greenery', tags: ['romantic', 'coastal', 'timeless', 'candles', 'glass'], items: [['Hurricane glasses', 'tables', 14, 5], ['Pillar candles', 'tables', 8, 3], ['Faux floral rings', 'tables', 15, 6]] },
      { t: 'Clusters of mismatched bud vases with single stems and taper candles', tags: ['garden', 'vintage', 'relaxed', 'whimsical', 'budvase'], items: [['Bud vases (5 per table)', 'tables5', 2.5, 0.8], ['Taper candles', 'tables3', 2, 0.8]] },
      { t: 'Low, lush arrangements of {flower} in {metal} compotes', tags: ['elegant', 'formal', 'ornate', 'gold', 'romantic', 'low'], items: [['Compote bowls', 'tables', 28, 9], ['Faux florals for arrangement', 'tables', 45, 18]] },
      { t: 'Tall glass cylinders with floating candles and trailing greenery', tags: ['dramatic', 'formal', 'tall', 'glass', 'modern'], items: [['Glass cylinder sets', 'tables', 30, 12], ['Floating candles', 'tables3', 2, 0.7]] },
      { t: 'A lantern and a ring of greenery on a wood slice', tags: ['rustic', 'wood', 'lantern', 'relaxed'], items: [['Lanterns', 'tables', 22, 9], ['Wood slices', 'tables', 9, 3]] },
      { t: 'Dried florals and pampas in terracotta vessels', tags: ['boho', 'pampas', 'warm'], items: [['Terracotta vessels', 'tables', 16, 6], ['Dried floral bundles', 'tables', 20, 8]] }] },
    { k: 'candles', name: 'Candles', kick: 'the glow', v: [
      { t: 'Candlelight everywhere: votives down every table and pillars grouped at the entrance', tags: ['candlelit', 'romantic', 'timeless', 'candles'], items: [['Votive holders + candles', 'tables6', 2.2, 0.7], ['Pillar candles (entrance)', 10, 7, 2.5]] },
      { t: 'Slim {main} taper candles in {metal} holders for a little drama', tags: ['dramatic', 'elegant', 'formal', 'candles'], items: [['Taper candles', 'tables4', 2.2, 0.8], ['Taper holders', 'tables4', 6, 2]] },
      { t: 'Flameless LED candles, so the venue is happy and nothing burns out', tags: ['relaxed', 'church', 'tent', 'candles', 'led'], items: [['LED pillar candles', 'tables3', 8, 3]] }] },
    { k: 'florals', name: 'Florals', kick: 'the flowers', v: [
      { t: 'Soft {flower} and lots of greenery, loose and a little wild', tags: ['garden', 'romantic', 'relaxed', 'whimsical'], items: [['Floral (bouquets + boutonnieres)', 1, 650, 260]] },
      { t: 'All-white roses and hydrangea, clean and timeless', tags: ['timeless', 'classic', 'elegant', 'formal'], items: [['Floral (bouquets + boutonnieres)', 1, 750, 300]] },
      { t: 'Mostly greenery with a few statement blooms, so the money goes further', tags: ['minimal', 'modern', 'relaxed'], items: [['Floral (bouquets + boutonnieres)', 1, 450, 180]] },
      { t: 'Dried and preserved florals in warm, earthy tones', tags: ['boho', 'pampas', 'warm'], items: [['Dried floral (bouquets + boutonnieres)', 1, 400, 170]] }] },
    { k: 'signage', name: 'Signage', kick: 'first impressions', v: [
      { t: 'A large arched mirror with hand-lettered welcome in white, a greenery swag on one corner', tags: ['romantic', 'elegant', 'mirror', 'timeless'], items: [['Arched mirror', 1, 120, 40], ['Vinyl lettering', 1, 25, 12], ['Easel', 1, 45, 15]] },
      { t: 'Clear acrylic signs with your names in {main}', tags: ['modern', 'minimal', 'coastal', 'acrylic'], items: [['Acrylic welcome sign', 1, 85, 35], ['Acrylic seating chart', 1, 110, 45]] },
      { t: 'Painted wood signs with florals and your date', tags: ['rustic', 'wood'], items: [['Wood welcome sign', 1, 75, 30]] },
      { t: 'A framed chalkboard menu and seating chart', tags: ['rustic', 'vintage', 'chalkboard'], items: [['Framed chalkboard', 2, 45, 15]] }] },
    { k: 'cardbox', name: 'Card box', kick: 'for all the love notes', v: [
      { t: 'A vintage wooden chest with a little sign that says "cards"', tags: ['vintage', 'rustic', 'wood', 'secondhand'], items: [['Vintage chest', 1, 90, 30]] },
      { t: 'A clear acrylic box with your names in {main}', tags: ['modern', 'minimal', 'acrylic'], items: [['Acrylic card box', 1, 60, 25]] },
      { t: 'An antique birdcage lined with {main} ribbon', tags: ['romantic', 'vintage', 'whimsical', 'garden'], items: [['Birdcage', 1, 55, 18]] },
      { t: 'A {metal} lantern card box with a slot in the top', tags: ['elegant', 'classic', 'lantern', 'gold'], items: [['Lantern card box', 1, 50, 20]] }] },
    { k: 'sweetheart', name: 'Sweetheart table', kick: 'just the two of you', v: [
      { t: 'A sweetheart table draped in {second}, a low garland of greenery and a cluster of candles', tags: ['romantic', 'candles', 'garden', 'coastal'], items: [['Table drape', 1, 45, 15], ['Greenery garland', 2, 35, 12]] },
      { t: 'A head table with a long {flower} garland running its full length', tags: ['classic', 'elegant', 'formal', 'head'], items: [['Long floral garland', 1, 220, 85]] },
      { t: 'Two vintage chairs and a lace-covered table with your initials', tags: ['vintage', 'whimsical', 'rustic'], items: [['Lace tablecloth', 1, 40, 12], ['Initials sign', 1, 35, 12]] }] },
    { k: 'lighting', name: 'Lighting', kick: 'after the sun goes down', v: [
      { t: 'Bistro lights criss-crossing overhead, warm and golden', tags: ['relaxed', 'backyard', 'tent', 'garden', 'stringlights'], items: [['Bistro lights (100 ft)', 2, 60, 35]] },
      { t: 'Low and candlelit, with uplighting washing the walls in {main}', tags: ['elegant', 'formal', 'ballroom', 'dramatic'], items: [['Uplights (rental)', 8, 25, 12]] },
      { t: 'Hanging lanterns and fairy lights draped through greenery', tags: ['whimsical', 'garden', 'barn', 'lantern'], items: [['Fairy light strands', 10, 12, 5], ['Hanging lanterns', 8, 18, 7]] }] },
    { k: 'atmosphere', name: 'Reception atmosphere', kick: 'the feeling in the room', v: [
      { t: 'Warm and relaxed: long tables, music you can talk over, everyone staying late', tags: ['relaxed', 'warm', 'intimate', 'backyard'], items: [] },
      { t: 'A real party: a full dance floor, a great band and a champagne toast', tags: ['dramatic', 'formal', 'ballroom', 'colorful'], items: [] },
      { t: 'Elegant and timeless: candlelight, soft jazz and a beautiful dinner', tags: ['elegant', 'timeless', 'classic', 'romantic'], items: [] }] }
  ];

  /* Inspiration photos (Pinterest embeds), tagged. Areas without a fitting photo show a palette tile. */
  TL.PINS = {
    ceremony: [['4855512095078890', ['garden', 'romantic', 'arch', 'fabric']], ['18155204744898617', ['garden', 'arch', 'fabric', 'romantic']], ['489907265742644374', ['garden', 'arch', 'timeless']], ['9359111722842882', ['garden', 'romantic']], ['91620173667488160', ['coastal', 'colorful', 'relaxed']], ['279223245644226705', ['moody', 'blue', 'garden']], ['262616222019963612', ['rustic', 'wood', 'whimsical']]],
    tablescape: [['41799102785747887', ['relaxed', 'backyard', 'stringlights', 'candles']], ['503769908347314354', ['candles', 'romantic', 'relaxed']], ['16607092373392007', ['garden', 'candles']], ['642677809354393967', ['classic', 'formal', 'timeless']], ['602778731423141077', ['elegant', 'modern', 'candles']], ['91620173667419898', ['coastal', 'blue']], ['262616222020100020', ['rustic', 'warm']]],
    centerpiece: [['2885187258112525', ['budvase', 'garden', 'candles', 'vintage']], ['70437491609931', ['romantic', 'pink', 'budvase']], ['44824958788392453', ['candles', 'romantic']], ['633178028907381188', ['candles', 'glass', 'timeless']], ['95279348360248170', ['formal', 'elegant', 'tall']], ['230950287139794735', ['garden', 'romantic']]],
    candles: [['503769908347314354', ['candles', 'candlelit']], ['44824958788392453', ['candles', 'romantic']]],
    lighting: [['160933386680757306', ['stringlights', 'relaxed', 'backyard']], ['46161964928595834', ['stringlights', 'garden']], ['41799102785747887', ['stringlights', 'backyard']]],
    signage: [['602778731422782536', ['modern', 'acrylic', 'elegant']], ['602778731422862618', ['modern', 'blue', 'colorful']], ['91620173667419895', ['coastal']]],
    atmosphere: [['91620173667413271', ['formal', 'colorful', 'dramatic']], ['91620173667392493', ['warm', 'relaxed', 'coastal']], ['279223245644210620', ['moody', 'romantic', 'elegant']], ['705798572893109430', ['vintage', 'romantic']]],
    aisle: [['3448137210899522', ['candles', 'romantic']], ['703756189169764', ['candles', 'garden']], ['11329436559867157', ['lantern', 'rustic']]]
  };

  var FEEL_TAGS = { 'Garden-inspired': 'garden', 'Candlelit': 'candlelit', 'Breezy': 'breezy' };
  var SETTING_TAGS = { 'Oceanfront': ['coastal'], 'Lakeside': ['coastal', 'relaxed'], 'Church': ['church', 'classic'], 'Garden': ['garden'], 'Backyard': ['backyard', 'relaxed'], 'Ballroom': ['ballroom', 'formal'], 'Barn': ['barn', 'rustic'], 'Historic venue': ['vintage', 'elegant'], 'City venue': ['modern'], 'Mountain setting': ['rustic', 'relaxed'], 'Country club': ['classic', 'elegant'], 'Tent': ['tent'], 'Estate': ['elegant', 'timeless'] };

  function low(s) { return String(s || '').toLowerCase(); }
  TL.slug = function (s) { return low(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); };

  /* ---------- Wedding DNA ---------- */
  TL.buildDNA = function (a) {
    var pal = TL.PALETTES.filter(function (p) { return p.id === a.palette; })[0] || null;
    var colors = a.colors || (pal ? { main: pal.main, second: pal.second, neutral: pal.neutral, metal: pal.metal } : null) || { main: ['Dusty blue', '#8DA4BE'], second: ['Ivory', '#F4EFE4'], neutral: ['Soft white', '#FBFAF7'], metal: ['Silver', '#C9CED6'] };
    var tags = {}; function add(t, w) { if (!t) return; tags[t] = (tags[t] || 0) + (w || 1); }
    (a.feelings || []).forEach(function (f) { add(FEEL_TAGS[f] || low(f), 2); });
    (a.settings || []).forEach(function (s) { (SETTING_TAGS[s] || []).forEach(function (t) { add(t, 2); }); });
    (a.quickTags || []).forEach(function (t) { add(t, 1.5); });
    if (pal) pal.tags.forEach(function (t) { add(t, 1); });
    var day = a.day || {}; var all = [].concat(day.arrive || [], day.ceremony || [], day.cocktail || [], day.reception || [], day.details || []);
    all.forEach(function (o) { var l = low(o);
      if (/candle/.test(l)) add('candles', 1.5); if (/lantern/.test(l)) add('lantern', 1.5); if (/arch|arbor/.test(l)) add('arch', 1); if (/bud vase/.test(l)) add('budvase', 2);
      if (/hurricane/.test(l)) add('glass', 2); if (/tall/.test(l)) add('tall', 2); if (/low cent/.test(l)) add('low', 2); if (/string|bistro/.test(l)) add('stringlights', 2);
      if (/charger/.test(l)) add('charger', 1.5); if (/runner/.test(l)) add('runner', 1.5); if (/greenery/.test(l)) add('garden', 1); if (/vintage/.test(l)) add('vintage', 1.5);
      if (/dramatic|statement/.test(l)) add('dramatic', 1); if (/simple|minimal/.test(l)) add('minimal', 1); if (/pew|altar/.test(l)) add('church', 1); if (/fabric/.test(l)) add('fabric', 1.5); if (/ground/.test(l)) add('ground', 1.5); });
    var avoid = {}; (a.dislikes || []).forEach(function (d) { (DISLIKE_TAGS[d] || [low(d)]).forEach(function (t) { avoid[t] = 1; }); });
    if (/gold/.test(low(colors.metal[0])) === false && avoid.gold) {} // metal choice already respects dislikes below
    if (avoid.gold && /gold|brass/i.test(colors.metal[0])) colors.metal = ['Silver', '#C9CED6'];
    if (avoid.silver && /silver/i.test(colors.metal[0])) colors.metal = ['Gold', '#C9A54C'];
    var guests = +a.guests || 100, per = +a.perTable || 8;
    var date = a.date ? new Date(a.date + 'T12:00:00') : null; var weeks = date ? Math.round((date - new Date()) / (7 * 864e5)) : null;
    var formal = (tags.formal || 0) + (tags.elegant || 0) - (tags.relaxed || 0) - (tags.rustic || 0);
    return {
      v: 1, names: [a.name1 || '', a.name2 || ''], email: a.email || '', date: a.date || '', weeks: weeks, season: date ? ['Winter', 'Winter', 'Spring', 'Spring', 'Spring', 'Summer', 'Summer', 'Summer', 'Fall', 'Fall', 'Fall', 'Winter'][date.getMonth()] : '',
      location: a.location || '', venue: a.venue || '', zip: a.zip || '', radius: +a.radius || 25, guests: guests, perTable: per, tableShape: a.tableShape || '',
      budget: { total: +a.totalBudget || 0, decor: +a.decorBudget || 1500, spent: +a.spent || 0 }, venueProvides: a.venueProvides || [],
      feelings: a.feelings || [], settings: a.settings || [], colors: colors, paletteName: pal ? pal.name : (colors.main[0] + ' + ' + colors.second[0]),
      day: day, dislikes: a.dislikes || [], dislikeText: a.dislikeText || '', words: a.words || {}, tags: tags, avoid: avoid,
      formality: formal > 2 ? 'Formal' : formal < -1 ? 'Relaxed' : 'Semi-formal', priority: +a.decorBudget && +a.decorBudget < 1500 ? 'Budget conscious' : 'Balanced',
      closeness: a.closeness || '', rejected: {}, feedback: {}
    };
  };

  /* ---------- narrative ---------- */
  function listJoin(arr) { arr = arr.filter(Boolean); if (arr.length < 2) return arr[0] || ''; return arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1]; }
  TL.flowerWord = function (d) { var m = low(d.colors.main[0]); if (/white|ivory|cream/.test(m)) return 'white florals'; if (/black|navy|emerald|burgundy/.test(m)) return 'ivory roses'; return 'soft ' + d.colors.second[0].toLowerCase() + ' and ' + d.colors.main[0].toLowerCase() + ' blooms'; };
  TL.narrative = function (d) {
    var feel = d.feelings.slice(0, 2).map(low); var setting = d.settings[0] ? low(d.settings[0]) : '';
    var place = setting === 'oceanfront' ? 'oceanfront' : setting === 'garden' ? 'garden' : setting === 'church' ? 'church' : setting || '';
    var kind = (feel[0] || 'romantic') + ' ' + (place ? place + ' ' : '') + 'celebration';
    var bits = [d.colors.main[0].toLowerCase() + ' details', 'soft ' + d.colors.second[0].toLowerCase() + ' touches'];
    if (d.tags.candles || d.tags.candlelit) bits.push('warm candlelight'); if (d.tags.stringlights) bits.push('string lights overhead'); if (d.tags.vintage) bits.push('a few vintage treasures'); if (d.tags.garden) bits.push('plenty of greenery');
    var end = d.formality === 'Formal' ? 'elegant from start to finish' : d.formality === 'Relaxed' ? 'relaxed and full of the people you love' : 'elegant without ever feeling stiff';
    var a = /^[aeiou]/.test(kind) ? 'an ' : 'a ';
    return 'You’re creating ' + a + kind + ' filled with ' + listJoin(bits.slice(0, 4)) + ', ' + end + '.';
  };
  TL.reflect = function (d) { // short live reflection for the builder
    var s = []; if (d.feelings.length) s.push(listJoin(d.feelings.slice(0, 3).map(low))); if (d.settings.length) s.push(low(d.settings[0])); if (d.paletteName) s.push(low(d.paletteName));
    return s.length ? 'So far we’re picturing something ' + s.join(', ') + '.' : '';
  };

  /* ---------- vision picks + learning ---------- */
  function score(v, d) {
    var s = 0; v.tags.forEach(function (t) { s += (d.tags[t] || 0); if (d.avoid[t]) s -= 100; if (d.rejected[t]) s -= 6 * d.rejected[t]; });
    if (d.avoid.gold && /\{metal\}/.test(v.t) && /gold/i.test(d.colors.metal[0])) s -= 100;
    return s;
  }
  TL.fill = function (txt, d) { return txt.replace(/\{main\}/g, d.colors.main[0].toLowerCase()).replace(/\{second\}/g, d.colors.second[0].toLowerCase()).replace(/\{metal\}/g, d.colors.metal[0].toLowerCase()).replace(/\{flower\}/g, TL.flowerWord(d)); };
  TL.pick = function (area, d, skip) { // best variant not yet shown-and-rejected
    skip = skip || []; var best = null, bs = -1e9;
    area.v.forEach(function (v, i) { if (skip.indexOf(i) > -1) return; var s = score(v, d); if (s > bs) { bs = s; best = i; } });
    return best;
  };
  TL.reject = function (d, area, i) { area.v[i].tags.forEach(function (t) { if (['candles', 'arch', 'glass'].indexOf(t) > -1) return; d.rejected[t] = (d.rejected[t] || 0) + 1; }); };
  TL.love = function (d, area, i) { area.v[i].tags.forEach(function (t) { d.tags[t] = (d.tags[t] || 0) + 1; }); };
  TL.pinFor = function (k, d, avoidIds) {
    var list = TL.PINS[k] || []; avoidIds = avoidIds || []; var best = null, bs = -1e9;
    list.forEach(function (p) { if (avoidIds.indexOf(p[0]) > -1) return; var s = 0; p[1].forEach(function (t) { s += (d.tags[t] || 0) - (d.avoid[t] ? 50 : 0) - (d.rejected[t] || 0) * 3; }); if (s > bs) { bs = s; best = p[0]; } });
    return bs > -20 ? best : null;
  };

  /* ---------- quantities ---------- */
  TL.qty = function (d) {
    var g = d.guests, tables = Math.ceil(g / (d.perTable || 8));
    return { guests: g, tables: tables, settings: Math.ceil(g * 1.05), centerpieces: tables, tableNumbers: tables, runners: tables, chargers: Math.ceil(g * 1.05), votives: tables * 6, napkins: Math.ceil(g * 1.05) };
  };
  function unitsFor(q, v) { if (typeof v === 'number') return v; return { tables: q.tables, guests: q.settings, tables3: q.tables * 3, tables4: q.tables * 4, tables5: q.tables * 5, tables6: q.tables * 6 }[v] || 1; }

  /* ---------- budget ---------- */
  TL.CATS = [['ceremony', 'Ceremony', 13], ['centerpiece', 'Centerpieces', 20], ['florals', 'Florals', 20], ['candles', 'Candles', 8], ['tablescape', 'Linens + table', 14], ['signage', 'Signage', 6], ['lighting', 'Lighting', 6], ['details', 'Card box + little details', 5]];
  TL.budget = function (d) {
    var total = Math.max(0, d.budget.decor - d.budget.spent), buffer = Math.round(total * 0.1), pool = total - buffer;
    var provided = d.venueProvides.map(low); var cats = TL.CATS.filter(function (c) { return !(c[0] === 'tablescape' && provided.indexOf('linens') > -1 && provided.indexOf('plates + flatware') > -1) && !(c[0] === 'lighting' && provided.indexOf('lighting') > -1) && !(c[0] === 'centerpiece' && provided.indexOf('centerpieces') > -1); });
    var sum = cats.reduce(function (a, c) { return a + c[2]; }, 0);
    var rows = cats.map(function (c) { return { k: c[0], name: c[1], amt: Math.round(pool * c[2] / sum / 5) * 5 }; });
    return { total: total, buffer: buffer, rows: rows };
  };

  /* ---------- savings (estimates) ---------- */
  TL.estimate = function (d, picks) { // picks: {areaKey: variantIndex}
    var q = TL.qty(d), out = [], retail = 0, plan = 0;
    TL.AREAS.forEach(function (a) { var i = picks[a.k]; if (i == null) return; var v = a.v[i]; var r = 0, p = 0, lines = [];
      v.items.forEach(function (it) { var n = unitsFor(q, it[1]); r += n * it[2]; p += n * it[3]; lines.push({ name: it[0], qty: n, retail: n * it[2], plan: n * it[3] }); });
      if (!lines.length) return; retail += r; plan += p; out.push({ k: a.k, name: a.name, retail: Math.round(r), plan: Math.round(p), lines: lines }); });
    return { rows: out, retail: Math.round(retail), plan: Math.round(plan), save: Math.round(retail - plan) };
  };

  /* ---------- timeline ---------- */
  TL.timeline = function (d) {
    var w = d.weeks; if (w == null) return { mode: 'Plan ahead', note: 'Add your date and we’ll tell you what to buy now and what can wait.' };
    if (w <= 6) return { mode: 'Buy now', note: 'Your wedding is ' + Math.max(w, 0) + ' weeks away, so we’ll focus on things you can get quickly: in-store pickup and fast shipping first.' };
    if (w <= 26) return { mode: 'Buy the big things, watch for the rest', note: 'About ' + w + ' weeks to go. Lock in big pieces now and keep an eye out for pre-loved deals on the rest.' };
    return { mode: 'Worth watching', note: 'About ' + Math.round(w / 4.3) + ' months to go. No rush: there’s time to wait for pre-loved and Bride-to-Bride deals and DIY closer to the day.' };
  };

  /* ---------- encode ---------- */
  TL.enc = function (o) { return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
  TL.dec = function (s) { try { return JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/'))))); } catch (e) { return null; } };
  TL.save = function (k, o) { try { localStorage.setItem(k, JSON.stringify(o)); } catch (e) {} };
  TL.load = function (k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  TL.money = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };
  W.TL = TL;
})(window);
/* Twice Loved engine: Wedding DNA, vision picks, learning, budget, quantities, savings.
   Runs entirely in the browser. Estimates are labeled as estimates; nothing here claims a real listing. */
(function (W) {
  var TL = {};

  TL.PALETTES = [
    { id: 'dustyblue-ivory', name: 'Dusty blue + ivory', main: ['Dusty blue', '#8DA4BE'], second: ['Ivory', '#F4EFE4'], neutral: ['Soft white', '#FBFAF7'], metal: ['Silver', '#C9CED6'], tags: ['blue', 'coastal', 'romantic'] },
    { id: 'sage-champagne', name: 'Sage + champagne', main: ['Sage', '#9CAF88'], second: ['Champagne', '#EADCC2'], neutral: ['Ivory', '#F7F2E8'], metal: ['Gold', '#C9A54C'], tags: ['green', 'garden'] },
    { id: 'black-white', name: 'Black + white', main: ['Black', '#1E1E1E'], second: ['White', '#FFFFFF'], neutral: ['Dove grey', '#E4E4E1'], metal: ['Gold', '#C9A54C'], tags: ['formal', 'modern'] },
    { id: 'blush-gold', name: 'Blush + gold', main: ['Blush', '#E8BDB5'], second: ['Ivory', '#F7F0E6'], neutral: ['Cream', '#FBF7F0'], metal: ['Gold', '#C9A54C'], tags: ['romantic', 'pink'] },
    { id: 'lavender-silver', name: 'Lavender + silver', main: ['Lavender', '#B7A6D1'], second: ['Silver mist', '#E6E7EC'], neutral: ['White', '#FFFFFF'], metal: ['Silver', '#C9CED6'], tags: ['purple', 'whimsical'] },
    { id: 'terracotta-cream', name: 'Terracotta + cream', main: ['Terracotta', '#C2693E'], second: ['Cream', '#F6EEDF'], neutral: ['Sand', '#E8D9C4'], metal: ['Brass', '#B8913F'], tags: ['boho', 'warm'] },
    { id: 'burgundy-blush', name: 'Burgundy + blush', main: ['Burgundy', '#6B1E2E'], second: ['Blush', '#F2D4CF'], neutral: ['Ivory', '#F7F0E6'], metal: ['Gold', '#C9A54C'], tags: ['moody', 'romantic'] },
    { id: 'emerald-gold', name: 'Emerald + gold', main: ['Emerald', '#1F5E46'], second: ['Gold', '#D4B35F'], neutral: ['Ivory', '#F3EFE3'], metal: ['Gold', '#C9A54C'], tags: ['formal', 'green'] },
    { id: 'navy-white', name: 'Navy + white', main: ['Navy', '#22324F'], second: ['White', '#FFFFFF'], neutral: ['Pale blue', '#DCE6F1'], metal: ['Silver', '#C9CED6'], tags: ['classic', 'coastal'] },
    { id: 'white-greenery', name: 'All white + greenery', main: ['White', '#FFFFFF'], second: ['Greenery', '#7E9A6E'], neutral: ['Ivory', '#F4EFE4'], metal: ['Clear glass', '#DDE6EC'], tags: ['timeless', 'garden'] },
    { id: 'peach-sage', name: 'Peach + sage', main: ['Peach', '#F1B79A'], second: ['Sage', '#A9B99A'], neutral: ['Cream', '#FBF5EC'], metal: ['Gold', '#C9A54C'], tags: ['garden', 'warm'] },
    { id: 'bright', name: 'Bright + colorful', main: ['Marigold', '#F2C12E'], second: ['Coral', '#F28C68'], neutral: ['White', '#FFFFFF'], metal: ['Gold', '#C9A54C'], tags: ['colorful', 'playful'] }
  ];
  TL.FEELINGS = ['Romantic', 'Timeless', 'Coastal', 'Breezy', 'Elegant', 'Relaxed', 'Candlelit', 'Whimsical', 'Dramatic', 'Garden-inspired', 'Modern', 'Classic', 'Intimate', 'Colorful', 'Warm', 'Formal', 'Rustic'];
  TL.SETTINGS = [['Oceanfront', 'Sand, salt air, the sound of waves'], ['Church', 'Stained glass, pews, tradition'], ['Garden', 'Blooms and green all around'], ['Backyard', 'Home, family, string lights'],
    ['Ballroom', 'Chandeliers and a big dance floor'], ['Barn', 'Wood beams and open doors'], ['Historic venue', 'A place with a story'], ['City venue', 'Skyline, loft, a little edge'],
    ['Lakeside', 'Still water at golden hour'], ['Mountain setting', 'Big views, cool air'], ['Country club', 'Green lawns, polished service'], ['Tent', 'A blank canvas under canvas'], ['Estate', 'Grand grounds and long drives']];
  TL.DAY = {
    arrive: { q: 'What do you want your guests to see when they first arrive?', o: ['Welcome sign', 'Florals', 'Candles', 'Vintage table', 'Seating display', 'Photos of us', 'Minimal entrance', 'Statement entrance'] },
    ceremony: { q: 'Now picture the moment you walk down the aisle. What surrounds you?', o: ['Aisle flowers', 'Candles', 'Lanterns', 'Ground arrangements', 'Pew decor', 'Arch', 'Arbor', 'Altar decor', 'Draped fabric', 'Simple and quiet', 'Dramatic and full'] },
    cocktail: { q: 'After the ceremony, what does celebrating with your guests feel like?', o: ['Card box', 'Guest book', 'Seating chart', 'Signature drink signs', 'Cocktail table decor', 'Photo display', 'Lounge area', 'Candles', 'Flowers', 'Memory table', 'Lawn games'] },
    reception: { q: 'Now picture everyone sitting down together. What does the room look like?', o: ['Round tables', 'Long tables', 'Linens', 'Runners', 'Chargers', 'Special plates', 'Gold or special flatware', 'Cloth napkins', 'Pretty glassware', 'Candles everywhere', 'Hurricane glasses', 'Bud vases', 'Tall centerpieces', 'Low centerpieces', 'Table numbers', 'Greenery', 'String or bistro lights'] },
    details: { q: 'What little details make this wedding feel like yours?', o: ['Sweetheart table', 'Head table', 'Cake display', 'Memorial table', 'Favor table', 'Photo display', 'Guest book area', 'Bathroom baskets', 'Late-night snacks', 'Custom signage', 'Card box', 'Family photos', 'A special tradition'] }
  };
  TL.DISLIKES = ['Gold', 'Silver', 'Mason jars', 'Pampas grass', 'Burlap', 'Rustic wood', 'Bright colors', 'Faux flowers', 'Overly formal decor', 'Minimalist decor', 'Glitter', 'Balloons', 'Neon signs', 'Chalkboard signs', 'Lots of pink', 'Tall centerpieces', 'Feathers', 'Sequins'];
  var DISLIKE_TAGS = { 'Gold': ['gold'], 'Silver': ['silver'], 'Mason jars': ['masonjar'], 'Pampas grass': ['pampas'], 'Burlap': ['burlap'], 'Rustic wood': ['wood', 'rustic'], 'Bright colors': ['bright'], 'Faux flowers': ['faux'],
    'Overly formal decor': ['formal', 'ornate'], 'Minimalist decor': ['minimal'], 'Glitter': ['glitter'], 'Balloons': ['balloon'], 'Neon signs': ['neon'], 'Chalkboard signs': ['chalkboard'], 'Lots of pink': ['pink'], 'Tall centerpieces': ['tall'], 'Feathers': ['feather'], 'Sequins': ['sequin'] };

  TL.QUICK = [
    [{ t: 'Oceanfront, dusty blue, airy white florals and candlelight', tags: ['coastal', 'romantic', 'candlelit', 'blue'], pal: 'dustyblue-ivory' },
     { t: 'A garden in sage green, wildflowers and vintage glass', tags: ['garden', 'vintage', 'relaxed', 'green'], pal: 'sage-champagne' },
     { t: 'Black-tie ballroom, black and white, roses and gold accents', tags: ['formal', 'classic', 'elegant', 'gold'], pal: 'black-white' }],
    { coastal: [{ t: 'Barefoot on the sand with driftwood and linen', tags: ['relaxed', 'breezy', 'wood'] }, { t: 'A white tent by the water with crystal and taper candles', tags: ['elegant', 'timeless', 'formal'] }, { t: 'A lighthouse lawn with navy, stripes and lanterns', tags: ['classic', 'lantern'] }],
      garden: [{ t: 'Overflowing blooms, long tables and mismatched china', tags: ['whimsical', 'vintage'] }, { t: 'Clean greenery, white roses and clear glass', tags: ['timeless', 'minimal'] }, { t: 'Golden hour, peach and terracotta, dried florals', tags: ['warm', 'boho', 'pampas'] }],
      formal: [{ t: 'Candlelit and moody, deep reds, velvet and brass', tags: ['moody', 'dramatic'] }, { t: 'Bright and crisp, all white florals and mirrors', tags: ['modern', 'minimal'] }, { t: 'Old-world romance, gilded frames and ivory roses', tags: ['romantic', 'ornate', 'gold'] }] }
  ];

  /* Vision variants per area. tags drive matching; avoid tags must not appear. items feed budget + "Find this look". */
  TL.AREAS = [
    { k: 'ceremony', name: 'Ceremony', kick: 'where you say I do', v: [
      { t: 'A round arch draped in soft {second} fabric with loose {flower} gathered at one side', tags: ['romantic', 'garden', 'coastal', 'arch', 'fabric'], items: [['Round metal arch', 1, 140, 55], ['Draping fabric panels', 2, 40, 18], ['Faux floral swag', 2, 90, 35]] },
      { t: 'A simple wooden arbor wrapped in greenery with candles lining the aisle', tags: ['rustic', 'wood', 'relaxed', 'arch', 'candles'], items: [['Wood arbor', 1, 180, 70], ['Greenery garland', 4, 30, 12], ['Pillar candles', 12, 6, 2.5]] },
      { t: 'No arch at all: a line of grounded {flower} arrangements and glass lanterns framing the two of you', tags: ['modern', 'timeless', 'elegant', 'ground', 'lantern'], items: [['Ground floral arrangements', 2, 220, 80], ['Glass lanterns', 8, 30, 12]] },
      { t: 'Church elegance: pew bows of {main} ribbon and greenery, with tall candles at the altar', tags: ['church', 'classic', 'formal', 'candles', 'traditional'], items: [['Pew decorations', 12, 25, 8], ['Altar candle stands', 2, 60, 25]] },
      { t: 'A hexagon arch with pampas and dried florals in warm tones', tags: ['boho', 'pampas', 'wood', 'arch'], items: [['Hexagon arch', 1, 160, 60], ['Dried floral swag', 2, 80, 35]] }] },
    { k: 'tablescape', name: 'Tablescape', kick: 'where everyone gathers', v: [
      { t: '{main} cheesecloth runners over ivory linens, clear glassware and {metal} flatware', tags: ['romantic', 'relaxed', 'coastal', 'garden', 'runner'], items: [['Cheesecloth runners', 'tables', 18, 7], ['Clear water goblets', 'guests', 3, 1.1]] },
      { t: 'Crisp white linens, {metal} chargers and cloth napkins tied with a sprig of greenery', tags: ['classic', 'formal', 'elegant', 'timeless', 'charger'], items: [['Chargers', 'guests', 4, 1.2], ['Cloth napkins', 'guests', 3, 1]] },
      { t: 'Bare wood farm tables with mismatched vintage china and linen napkins', tags: ['rustic', 'vintage', 'wood', 'whimsical'], items: [['Vintage plates (mixed)', 'guests', 4, 1.3], ['Linen napkins', 'guests', 3, 1]] },
      { t: 'Black and white: {main} napkins, white plates and slim taper candles in a straight line', tags: ['modern', 'minimal', 'formal'], items: [['Napkins', 'guests', 2.5, 0.9], ['Taper holders', 'tables', 12, 4]] }] },
    { k: 'centerpiece', name: 'Centerpieces', kick: 'the heart of every table', v: [
      { t: 'Clear hurricane glasses with ivory pillar candles, ringed with loose {flower} and greenery', tags: ['romantic', 'coastal', 'timeless', 'candles', 'glass'], items: [['Hurricane glasses', 'tables', 14, 5], ['Pillar candles', 'tables', 8, 3], ['Faux floral rings', 'tables', 15, 6]] },
      { t: 'Clusters of mismatched bud vases with single stems and taper candles', tags: ['garden', 'vintage', 'relaxed', 'whimsical', 'budvase'], items: [['Bud vases (5 per table)', 'tables5', 2.5, 0.8], ['Taper candles', 'tables3', 2, 0.8]] },
      { t: 'Low, lush arrangements of {flower} in {metal} compotes', tags: ['elegant', 'formal', 'ornate', 'gold', 'romantic', 'low'], items: [['Compote bowls', 'tables', 28, 9], ['Faux florals for arrangement', 'tables', 45, 18]] },
      { t: 'Tall glass cylinders with floating candles and trailing greenery', tags: ['dramatic', 'formal', 'tall', 'glass', 'modern'], items: [['Glass cylinder sets', 'tables', 30, 12], ['Floating candles', 'tables3', 2, 0.7]] },
      { t: 'A lantern and a ring of greenery on a wood slice', tags: ['rustic', 'wood', 'lantern', 'relaxed'], items: [['Lanterns', 'tables', 22, 9], ['Wood slices', 'tables', 9, 3]] },
      { t: 'Dried florals and pampas in terracotta vessels', tags: ['boho', 'pampas', 'warm'], items: [['Terracotta vessels', 'tables', 16, 6], ['Dried floral bundles', 'tables', 20, 8]] }] },
    { k: 'candles', name: 'Candles', kick: 'the glow', v: [
      { t: 'Candlelight everywhere: votives down every table and pillars grouped at the entrance', tags: ['candlelit', 'romantic', 'timeless', 'candles'], items: [['Votive holders + candles', 'tables6', 2.2, 0.7], ['Pillar candles (entrance)', 10, 7, 2.5]] },
      { t: 'Slim {main} taper candles in {metal} holders for a little drama', tags: ['dramatic', 'elegant', 'formal', 'candles'], items: [['Taper candles', 'tables4', 2.2, 0.8], ['Taper holders', 'tables4', 6, 2]] },
      { t: 'Flameless LED candles, so the venue is happy and nothing burns out', tags: ['relaxed', 'church', 'tent', 'candles', 'led'], items: [['LED pillar candles', 'tables3', 8, 3]] }] },
    { k: 'florals', name: 'Florals', kick: 'the flowers', v: [
      { t: 'Soft {flower} and lots of greenery, loose and a little wild', tags: ['garden', 'romantic', 'relaxed', 'whimsical'], items: [['Floral (bouquets + boutonnieres)', 1, 650, 260]] },
      { t: 'All-white roses and hydrangea, clean and timeless', tags: ['timeless', 'classic', 'elegant', 'formal'], items: [['Floral (bouquets + boutonnieres)', 1, 750, 300]] },
      { t: 'Mostly greenery with a few statement blooms, so the money goes further', tags: ['minimal', 'modern', 'relaxed'], items: [['Floral (bouquets + boutonnieres)', 1, 450, 180]] },
      { t: 'Dried and preserved florals in warm, earthy tones', tags: ['boho', 'pampas', 'warm'], items: [['Dried floral (bouquets + boutonnieres)', 1, 400, 170]] }] },
    { k: 'signage', name: 'Signage', kick: 'first impressions', v: [
      { t: 'A large arched mirror with hand-lettered welcome in white, a greenery swag on one corner', tags: ['romantic', 'elegant', 'mirror', 'timeless'], items: [['Arched mirror', 1, 120, 40], ['Vinyl lettering', 1, 25, 12], ['Easel', 1, 45, 15]] },
      { t: 'Clear acrylic signs with your names in {main}', tags: ['modern', 'minimal', 'coastal', 'acrylic'], items: [['Acrylic welcome sign', 1, 85, 35], ['Acrylic seating chart', 1, 110, 45]] },
      { t: 'Painted wood signs with florals and your date', tags: ['rustic', 'wood'], items: [['Wood welcome sign', 1, 75, 30]] },
      { t: 'A framed chalkboard menu and seating chart', tags: ['rustic', 'vintage', 'chalkboard'], items: [['Framed chalkboard', 2, 45, 15]] }] },
    { k: 'cardbox', name: 'Card box', kick: 'for all the love notes', v: [
      { t: 'A vintage wooden chest with a little sign that says "cards"', tags: ['vintage', 'rustic', 'wood', 'secondhand'], items: [['Vintage chest', 1, 90, 30]] },
      { t: 'A clear acrylic box with your names in {main}', tags: ['modern', 'minimal', 'acrylic'], items: [['Acrylic card box', 1, 60, 25]] },
      { t: 'An antique birdcage lined with {main} ribbon', tags: ['romantic', 'vintage', 'whimsical', 'garden'], items: [['Birdcage', 1, 55, 18]] },
      { t: 'A {metal} lantern card box with a slot in the top', tags: ['elegant', 'classic', 'lantern', 'gold'], items: [['Lantern card box', 1, 50, 20]] }] },
    { k: 'sweetheart', name: 'Sweetheart table', kick: 'just the two of you', v: [
      { t: 'A sweetheart table draped in {second}, a low garland of greenery and a cluster of candles', tags: ['romantic', 'candles', 'garden', 'coastal'], items: [['Table drape', 1, 45, 15], ['Greenery garland', 2, 35, 12]] },
      { t: 'A head table with a long {flower} garland running its full length', tags: ['classic', 'elegant', 'formal', 'head'], items: [['Long floral garland', 1, 220, 85]] },
      { t: 'Two vintage chairs and a lace-covered table with your initials', tags: ['vintage', 'whimsical', 'rustic'], items: [['Lace tablecloth', 1, 40, 12], ['Initials sign', 1, 35, 12]] }] },
    { k: 'lighting', name: 'Lighting', kick: 'after the sun goes down', v: [
      { t: 'Bistro lights criss-crossing overhead, warm and golden', tags: ['relaxed', 'backyard', 'tent', 'garden', 'stringlights'], items: [['Bistro lights (100 ft)', 2, 60, 35]] },
      { t: 'Low and candlelit, with uplighting washing the walls in {main}', tags: ['elegant', 'formal', 'ballroom', 'dramatic'], items: [['Uplights (rental)', 8, 25, 12]] },
      { t: 'Hanging lanterns and fairy lights draped through greenery', tags: ['whimsical', 'garden', 'barn', 'lantern'], items: [['Fairy light strands', 10, 12, 5], ['Hanging lanterns', 8, 18, 7]] }] },
    { k: 'atmosphere', name: 'Reception atmosphere', kick: 'the feeling in the room', v: [
      { t: 'Warm and relaxed: long tables, music you can talk over, everyone staying late', tags: ['relaxed', 'warm', 'intimate', 'backyard'], items: [] },
      { t: 'A real party: a full dance floor, a great band and a champagne toast', tags: ['dramatic', 'formal', 'ballroom', 'colorful'], items: [] },
      { t: 'Elegant and timeless: candlelight, soft jazz and a beautiful dinner', tags: ['elegant', 'timeless', 'classic', 'romantic'], items: [] }] }
  ];

  /* Inspiration photos (Pinterest embeds), tagged. Areas without a fitting photo show a palette tile. */
  TL.PINS = {
    ceremony: [['4855512095078890', ['garden', 'romantic', 'arch', 'fabric']], ['18155204744898617', ['garden', 'arch', 'fabric', 'romantic']], ['489907265742644374', ['garden', 'arch', 'timeless']], ['9359111722842882', ['garden', 'romantic']], ['91620173667488160', ['coastal', 'colorful', 'relaxed']], ['279223245644226705', ['moody', 'blue', 'garden']], ['262616222019963612', ['rustic', 'wood', 'whimsical']]],
    tablescape: [['41799102785747887', ['relaxed', 'backyard', 'stringlights', 'candles']], ['503769908347314354', ['candles', 'romantic', 'relaxed']], ['16607092373392007', ['garden', 'candles']], ['642677809354393967', ['classic', 'formal', 'timeless']], ['602778731423141077', ['elegant', 'modern', 'candles']], ['91620173667419898', ['coastal', 'blue']], ['262616222020100020', ['rustic', 'warm']]],
    centerpiece: [['2885187258112525', ['budvase', 'garden', 'candles', 'vintage']], ['70437491609931', ['romantic', 'pink', 'budvase']], ['44824958788392453', ['candles', 'romantic']], ['633178028907381188', ['candles', 'glass', 'timeless']], ['95279348360248170', ['formal', 'elegant', 'tall']], ['230950287139794735', ['garden', 'romantic']]],
    candles: [['503769908347314354', ['candles', 'candlelit']], ['44824958788392453', ['candles', 'romantic']]],
    lighting: [['160933386680757306', ['stringlights', 'relaxed', 'backyard']], ['46161964928595834', ['stringlights', 'garden']], ['41799102785747887', ['stringlights', 'backyard']]],
    signage: [['602778731422782536', ['modern', 'acrylic', 'elegant']], ['602778731422862618', ['modern', 'blue', 'colorful']], ['91620173667419895', ['coastal']]],
    atmosphere: [['91620173667413271', ['formal', 'colorful', 'dramatic']], ['91620173667392493', ['warm', 'relaxed', 'coastal']], ['279223245644210620', ['moody', 'romantic', 'elegant']], ['705798572893109430', ['vintage', 'romantic']]],
    aisle: [['3448137210899522', ['candles', 'romantic']], ['703756189169764', ['candles', 'garden']], ['11329436559867157', ['lantern', 'rustic']]]
  };

  var FEEL_TAGS = { 'Garden-inspired': 'garden', 'Candlelit': 'candlelit', 'Breezy': 'breezy' };
  var SETTING_TAGS = { 'Oceanfront': ['coastal'], 'Lakeside': ['coastal', 'relaxed'], 'Church': ['church', 'classic'], 'Garden': ['garden'], 'Backyard': ['backyard', 'relaxed'], 'Ballroom': ['ballroom', 'formal'], 'Barn': ['barn', 'rustic'], 'Historic venue': ['vintage', 'elegant'], 'City venue': ['modern'], 'Mountain setting': ['rustic', 'relaxed'], 'Country club': ['classic', 'elegant'], 'Tent': ['tent'], 'Estate': ['elegant', 'timeless'] };

  function low(s) { return String(s || '').toLowerCase(); }
  TL.slug = function (s) { return low(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); };

  /* ---------- Wedding DNA ---------- */
  TL.buildDNA = function (a) {
    var pal = TL.PALETTES.filter(function (p) { return p.id === a.palette; })[0] || null;
    var colors = a.colors || (pal ? { main: pal.main, second: pal.second, neutral: pal.neutral, metal: pal.metal } : null) || { main: ['Dusty blue', '#8DA4BE'], second: ['Ivory', '#F4EFE4'], neutral: ['Soft white', '#FBFAF7'], metal: ['Silver', '#C9CED6'] };
    var tags = {}; function add(t, w) { if (!t) return; tags[t] = (tags[t] || 0) + (w || 1); }
    (a.feelings || []).forEach(function (f) { add(FEEL_TAGS[f] || low(f), 2); });
    (a.settings || []).forEach(function (s) { (SETTING_TAGS[s] || []).forEach(function (t) { add(t, 2); }); });
    (a.quickTags || []).forEach(function (t) { add(t, 1.5); });
    if (pal) pal.tags.forEach(function (t) { add(t, 1); });
    var day = a.day || {}; var all = [].concat(day.arrive || [], day.ceremony || [], day.cocktail || [], day.reception || [], day.details || []);
    all.forEach(function (o) { var l = low(o);
      if (/candle/.test(l)) add('candles', 1.5); if (/lantern/.test(l)) add('lantern', 1.5); if (/arch|arbor/.test(l)) add('arch', 1); if (/bud vase/.test(l)) add('budvase', 2);
      if (/hurricane/.test(l)) add('glass', 2); if (/tall/.test(l)) add('tall', 2); if (/low cent/.test(l)) add('low', 2); if (/string|bistro/.test(l)) add('stringlights', 2);
      if (/charger/.test(l)) add('charger', 1.5); if (/runner/.test(l)) add('runner', 1.5); if (/greenery/.test(l)) add('garden', 1); if (/vintage/.test(l)) add('vintage', 1.5);
      if (/dramatic|statement/.test(l)) add('dramatic', 1); if (/simple|minimal/.test(l)) add('minimal', 1); if (/pew|altar/.test(l)) add('church', 1); if (/fabric/.test(l)) add('fabric', 1.5); if (/ground/.test(l)) add('ground', 1.5); });
    var avoid = {}; (a.dislikes || []).forEach(function (d) { (DISLIKE_TAGS[d] || [low(d)]).forEach(function (t) { avoid[t] = 1; }); });
    if (/gold/.test(low(colors.metal[0])) === false && avoid.gold) {} // metal choice already respects dislikes below
    if (avoid.gold && /gold|brass/i.test(colors.metal[0])) colors.metal = ['Silver', '#C9CED6'];
    if (avoid.silver && /silver/i.test(colors.metal[0])) colors.metal = ['Gold', '#C9A54C'];
    var guests = +a.guests || 100, per = +a.perTable || 8;
    var date = a.date ? new Date(a.date + 'T12:00:00') : null; var weeks = date ? Math.round((date - new Date()) / (7 * 864e5)) : null;
    var formal = (tags.formal || 0) + (tags.elegant || 0) - (tags.relaxed || 0) - (tags.rustic || 0);
    return {
      v: 1, names: [a.name1 || '', a.name2 || ''], email: a.email || '', date: a.date || '', weeks: weeks, season: date ? ['Winter', 'Winter', 'Spring', 'Spring', 'Spring', 'Summer', 'Summer', 'Summer', 'Fall', 'Fall', 'Fall', 'Winter'][date.getMonth()] : '',
      location: a.location || '', venue: a.venue || '', zip: a.zip || '', radius: +a.radius || 25, guests: guests, perTable: per, tableShape: a.tableShape || '',
      budget: { total: +a.totalBudget || 0, decor: +a.decorBudget || 1500, spent: +a.spent || 0 }, venueProvides: a.venueProvides || [],
      feelings: a.feelings || [], settings: a.settings || [], colors: colors, paletteName: pal ? pal.name : (colors.main[0] + ' + ' + colors.second[0]),
      day: day, dislikes: a.dislikes || [], dislikeText: a.dislikeText || '', words: a.words || {}, tags: tags, avoid: avoid,
      formality: formal > 2 ? 'Formal' : formal < -1 ? 'Relaxed' : 'Semi-formal', priority: +a.decorBudget && +a.decorBudget < 1500 ? 'Budget conscious' : 'Balanced',
      closeness: a.closeness || '', rejected: {}, feedback: {}
    };
  };

  /* ---------- narrative ---------- */
  function listJoin(arr) { arr = arr.filter(Boolean); if (arr.length < 2) return arr[0] || ''; return arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1]; }
  TL.flowerWord = function (d) { var m = low(d.colors.main[0]); if (/white|ivory|cream/.test(m)) return 'white florals'; if (/black|navy|emerald|burgundy/.test(m)) return 'ivory roses'; return 'soft ' + d.colors.second[0].toLowerCase() + ' and ' + d.colors.main[0].toLowerCase() + ' blooms'; };
  TL.narrative = function (d) {
    var feel = d.feelings.slice(0, 2).map(low); var setting = d.settings[0] ? low(d.settings[0]) : '';
    var place = setting === 'oceanfront' ? 'oceanfront' : setting === 'garden' ? 'garden' : setting === 'church' ? 'church' : setting || '';
    var kind = (feel[0] || 'romantic') + ' ' + (place ? place + ' ' : '') + 'celebration';
    var bits = [d.colors.main[0].toLowerCase() + ' details', 'soft ' + d.colors.second[0].toLowerCase() + ' touches'];
    if (d.tags.candles || d.tags.candlelit) bits.push('warm candlelight'); if (d.tags.stringlights) bits.push('string lights overhead'); if (d.tags.vintage) bits.push('a few vintage treasures'); if (d.tags.garden) bits.push('plenty of greenery');
    var end = d.formality === 'Formal' ? 'elegant from start to finish' : d.formality === 'Relaxed' ? 'relaxed and full of the people you love' : 'elegant without ever feeling stiff';
    var a = /^[aeiou]/.test(kind) ? 'an ' : 'a ';
    return 'You’re creating ' + a + kind + ' filled with ' + listJoin(bits.slice(0, 4)) + ', ' + end + '.';
  };
  TL.reflect = function (d) { // short live reflection for the builder
    var s = []; if (d.feelings.length) s.push(listJoin(d.feelings.slice(0, 3).map(low))); if (d.settings.length) s.push(low(d.settings[0])); if (d.paletteName) s.push(low(d.paletteName));
    return s.length ? 'So far we’re picturing something ' + s.join(', ') + '.' : '';
  };

  /* ---------- vision picks + learning ---------- */
  function score(v, d) {
    var s = 0; v.tags.forEach(function (t) { s += (d.tags[t] || 0); if (d.avoid[t]) s -= 100; if (d.rejected[t]) s -= 6 * d.rejected[t]; });
    if (d.avoid.gold && /\{metal\}/.test(v.t) && /gold/i.test(d.colors.metal[0])) s -= 100;
    return s;
  }
  TL.fill = function (txt, d) { return txt.replace(/\{main\}/g, d.colors.main[0].toLowerCase()).replace(/\{second\}/g, d.colors.second[0].toLowerCase()).replace(/\{metal\}/g, d.colors.metal[0].toLowerCase()).replace(/\{flower\}/g, TL.flowerWord(d)); };
  TL.pick = function (area, d, skip) { // best variant not yet shown-and-rejected
    skip = skip || []; var best = null, bs = -1e9;
    area.v.forEach(function (v, i) { if (skip.indexOf(i) > -1) return; var s = score(v, d); if (s > bs) { bs = s; best = i; } });
    return best;
  };
  TL.reject = function (d, area, i) { area.v[i].tags.forEach(function (t) { if (['candles', 'arch', 'glass'].indexOf(t) > -1) return; d.rejected[t] = (d.rejected[t] || 0) + 1; }); };
  TL.love = function (d, area, i) { area.v[i].tags.forEach(function (t) { d.tags[t] = (d.tags[t] || 0) + 1; }); };
  TL.pinFor = function (k, d, avoidIds) {
    var list = TL.PINS[k] || []; avoidIds = avoidIds || []; var best = null, bs = -1e9;
    list.forEach(function (p) { if (avoidIds.indexOf(p[0]) > -1) return; var s = 0; p[1].forEach(function (t) { s += (d.tags[t] || 0) - (d.avoid[t] ? 50 : 0) - (d.rejected[t] || 0) * 3; }); if (s > bs) { bs = s; best = p[0]; } });
    return bs > -20 ? best : null;
  };

  /* ---------- quantities ---------- */
  TL.qty = function (d) {
    var g = d.guests, tables = Math.ceil(g / (d.perTable || 8));
    return { guests: g, tables: tables, settings: Math.ceil(g * 1.05), centerpieces: tables, tableNumbers: tables, runners: tables, chargers: Math.ceil(g * 1.05), votives: tables * 6, napkins: Math.ceil(g * 1.05) };
  };
  function unitsFor(q, v) { if (typeof v === 'number') return v; return { tables: q.tables, guests: q.settings, tables3: q.tables * 3, tables4: q.tables * 4, tables5: q.tables * 5, tables6: q.tables * 6 }[v] || 1; }

  /* ---------- budget ---------- */
  TL.CATS = [['ceremony', 'Ceremony', 13], ['centerpiece', 'Centerpieces', 20], ['florals', 'Florals', 20], ['candles', 'Candles', 8], ['tablescape', 'Linens + table', 14], ['signage', 'Signage', 6], ['lighting', 'Lighting', 6], ['details', 'Card box + little details', 5]];
  TL.budget = function (d) {
    var total = Math.max(0, d.budget.decor - d.budget.spent), buffer = Math.round(total * 0.1), pool = total - buffer;
    var provided = d.venueProvides.map(low); var cats = TL.CATS.filter(function (c) { return !(c[0] === 'tablescape' && provided.indexOf('linens') > -1 && provided.indexOf('plates + flatware') > -1) && !(c[0] === 'lighting' && provided.indexOf('lighting') > -1) && !(c[0] === 'centerpiece' && provided.indexOf('centerpieces') > -1); });
    var sum = cats.reduce(function (a, c) { return a + c[2]; }, 0);
    var rows = cats.map(function (c) { return { k: c[0], name: c[1], amt: Math.round(pool * c[2] / sum / 5) * 5 }; });
    return { total: total, buffer: buffer, rows: rows };
  };

  /* ---------- savings (estimates) ---------- */
  TL.estimate = function (d, picks) { // picks: {areaKey: variantIndex}
    var q = TL.qty(d), out = [], retail = 0, plan = 0;
    TL.AREAS.forEach(function (a) { var i = picks[a.k]; if (i == null) return; var v = a.v[i]; var r = 0, p = 0, lines = [];
      v.items.forEach(function (it) { var n = unitsFor(q, it[1]); r += n * it[2]; p += n * it[3]; lines.push({ name: it[0], qty: n, retail: n * it[2], plan: n * it[3] }); });
      if (!lines.length) return; retail += r; plan += p; out.push({ k: a.k, name: a.name, retail: Math.round(r), plan: Math.round(p), lines: lines }); });
    return { rows: out, retail: Math.round(retail), plan: Math.round(plan), save: Math.round(retail - plan) };
  };

  /* ---------- timeline ---------- */
  TL.timeline = function (d) {
    var w = d.weeks; if (w == null) return { mode: 'Plan ahead', note: 'Add your date and we’ll tell you what to buy now and what can wait.' };
    if (w <= 6) return { mode: 'Buy now', note: 'Your wedding is ' + Math.max(w, 0) + ' weeks away, so we’ll focus on things you can get quickly: in-store pickup and fast shipping first.' };
    if (w <= 26) return { mode: 'Buy the big things, watch for the rest', note: 'About ' + w + ' weeks to go. Lock in big pieces now and keep an eye out for pre-loved deals on the rest.' };
    return { mode: 'Worth watching', note: 'About ' + Math.round(w / 4.3) + ' months to go. No rush: there’s time to wait for pre-loved and Bride-to-Bride deals and DIY closer to the day.' };
  };

  /* ---------- encode ---------- */
  TL.enc = function (o) { return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
  TL.dec = function (s) { try { return JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/'))))); } catch (e) { return null; } };
  TL.save = function (k, o) { try { localStorage.setItem(k, JSON.stringify(o)); } catch (e) {} };
  TL.load = function (k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  TL.money = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };
  W.TL = TL;
})(window);
