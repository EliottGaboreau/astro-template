
import Block from "./block.astro";
import Gallery from "./blocks/gallery.astro";
import Heading from "./heading.astro";
import HorizontalRule from "./horizontal_rule.astro";
import Linebreak from "./linebreak.astro";
import List from "./list.astro";
import ListItem from "./list_item.astro";
import Paragraph from "./paragraph.astro";
import Root from "./root.astro";
import Text from "./text.astro";
import Unknown from "./unknown.astro";
import UnknownBlock from "./blocks/unknown.astro";
import Upload from "./upload.astro";
import YoutubeVideo from "./blocks/youtube_video.astro";
import PagesList from "./blocks/pages_list.astro";
import Link from "./link.astro";

export const defaultBlockComponents = {
    Gallery: Gallery,
    YoutubeVideo: YoutubeVideo,
    PagesList: PagesList,
    unknown: UnknownBlock,
}

export const defaultComponents = {
    block: Block,
    heading: Heading,
    horizontalrule: HorizontalRule,
    linebreak: Linebreak,
    link: Link,
    list: List,
    listitem: ListItem,
    paragraph: Paragraph,
    root: Root,
    text: Text,
    unknown: Unknown,
    upload: Upload,
}