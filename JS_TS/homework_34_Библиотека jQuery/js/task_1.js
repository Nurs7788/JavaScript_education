function board (amount) {
    const block = $('body');
    block.css({
      width: amount * 50,
      height: amount * 50,
      padding: '0',
      margin: 'auto',
      border: '2px solid black',
      lineHeight: '0'
    });
  
    for (i = 0; i < amount; i++) {
      for (j = 0; j < amount; j++) {
        const el = $('<div></div>')
        
        el.css({
            width: '50px',
            height: '50px',
            display: 'inline-block',
            margin: '0',
            padding: '0'
        });
    
        el.css({backgroundColor: (i % 2 == j % 2 ? "#FFF" : "#000")});
    
        $('body').append(el);
      };
    };
  };
  
  