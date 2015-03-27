class TagUrl < Liquid::Tag
  def initialize(tag_name, ugly_tag, tokens)
    super
    @ugly_tag = ugly_tag
  end

  def render(context)
    context['site']['url'] + "/tags/" + url_beautify(context[@markup.strip])
  end

  def url_beautify(tag)
    return tag.gsub(/_|\P{Word}/, '-').gsub(/-{2,}/, '-').downcase
  end
end

Liquid::Template.register_tag('tag_url', TagUrl)
