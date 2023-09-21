
# Front-end

## Section 7: Intermediate CSS

### 7.2 CSS Positioning

- Static: Default position
- Relative: Relative to default position
- Absolute: Relative to the nearest positioned ancestor or top left corner of webpage
- Fixed: Relative to the top left corner of webpage and always float

## Section 8: Advanced CSS

### 8.0 CSS Display

- Block: Occupy whole line with width and height
- Inline: Text in the same line
- Inline-Block: Occupy not whole line with width and height
- None

### 8.1 CSS Float

```css
image {
    /* Float on the left */
    float: left;
}

footer {
    /* Let footer not on the right of image */
    clear: left;
}
```

### 8.2 Responsiveness

#### 1. @media Query
```css
/* Breakpoint: If content is less than 600px, use internal render css */
@media (max-width: 600px) {
    div {
        height: 100px;
    }
}
/* Breakpoint: If content is over 600px and less than 900px, use internal render css */
@media (min-width: 600px) and (max-width: 600px) {
    div {
        height: 100px;
    }
}
```

#### 2. CSS Grid
```css
.grid-container {
    display: grid;
    /* fr: fraction, means the weight of every element */
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 100px 200px 200px;
}

.first {
    grid-column: span 2;
}

.card {
    background-color: blue;
}
```

#### 3. CSS Flexbox
```css
.flex-container {
    display: flex;
}

.card {
    flex: 1;
}

.first {
    flex: 2;
}

.second {
    flex: 0.5;
}
```

#### 4. Bootstrap Framework
```html
<div class="container">
    <div class="row">
        <div class="card col-6">
            Card
        </div>
        <div class="card col-2">
            Card
        </div>
    </div>
</div>
```


## Section 9: Flexbox

### 9.0 Display Flex

#### Float
```css
.one {
    float: left;
    width: 25%;
}
.two {
    float: left;
    width: 40%;
}
```

#### Flexbox
```css
.container {
    display: flex;
    gap: 10px;
}
```

#### 9.1 Flex Direction
```css
.container {
    /* main-axis, from left to right */
    flex-direction: row;
    /* cross-axis, from top to bottom */
    flex-direction: column;
}

.item {
    flex-basis: 100px;
}
```

#### 9.2 Flex Layout
```css
.item {
    /* Bigger order number, righter item is */
    order: 10;
}

.container {
    flex-wrap: wrap;
    flex-direction: column;
    /* Or the following line */
    flex-flow: column wrap;

    /* Align with left, row based flex box */
    justify-content: flex-start;
    /* Align with right, row based flex box */
    justify-content: flex-end;
    /* First and last overlap with the edge */
    justify-content: space-between;

    /* Different direction comparing to justify-content */
    align-items: flex-start;
    /* Viewport height */
    height: 70vh;
    
    /* We can also set align-items, and set align-self of an item */
}
```

#### 9.3 Flex Sizing
```css
/* content width < width < flex-basis < min-width/max-width*/ 
```

#### 10.0 Display Grid
```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
}
```

#### 10.1 Grid Sizing
    1px: 1/96th inch
    1pt: 1/72nd inch
    1em: 100% of parent
    1rem: 100% of root
```css
.container {
    /* 1. Fixed size */
    /*  rows / columns, equivalent to grid-template-columns and grid-template-rows */
    grid-template: 100px 200px / 400px 800px;

    /* 2. Auto size */
    grid-template-columns: 100px auto;
    grid-template-rows: 200px auto;

    /* 3. Fractional size, ratio */
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 2fr;

    /* 4. Minmax size, responsive in an area */
    grid-template-columns: 200px 400px;
    grid-template-rows: 200px minmax(400px, 800px);

    /* 5. Repeat */
    grid-template-columns: repeat(2, 100px);
    grid-template-rows: repeat(3, 100px);
    /* If no css take effect, use this */
    grid-auto-rows: 300px;
}
```











