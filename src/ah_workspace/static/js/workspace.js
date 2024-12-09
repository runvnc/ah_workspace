// Register the workspace command handler
//
//
// Throttle function - ensures execution at least every 'wait' milliseconds
function throttle(func, wait) {
    let lastCall = 0;
    let timeout;

    return function executedFunction(...args) {
        const now = Date.now();

        if (now - lastCall >= wait) {
            func(...args);
            lastCall = now;
        } else {
            // Optional: ensure the last call still happens
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func(...args);
                lastCall = Date.now();
            }, wait - (now - lastCall));
        }
    };
}


function doUpdate(html) {
  const workspace = document.querySelector('workspace-area'); 
  workspace.setContent(html);
}

const throttledUpdate = throttle(doUpdate, 500);

window.registerCommandHandler('update_workspace', (data) => {
  console.log('update_workspace', data);
  const workspace = document.querySelector('workspace-area');
  if (workspace) {
    if (data.event == 'partial') {
      throttledUpdate(data.params.content);
    } else {
      throttledUpdate(data.args.content);
    }
  } else {
    console.error('Workspace area not found');
  }
});
