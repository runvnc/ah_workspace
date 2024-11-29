// Register the workspace command handler
window.registerCommandHandler('update_workspace', (data) => {
  console.log('update_workspace', data);
  const workspace = document.querySelector('workspace-area');
  if (workspace) {
    if (data.event == 'partial') {
      workspace.setContent(data.params.content);
    } else {
      workspace.setContent(data.args.content);
    }
  } else {
    console.error('Workspace area not found');
  }
});
