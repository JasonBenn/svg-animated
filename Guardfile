guard :shell do
  watch 'draft.haml' do
    `haml draft.haml > draft.html`
  end
end

guard :less do
  watch %r{draft.less}
end

guard :livereload do
  watch(%r{draft.html})
  watch(%r{draft.css})
end