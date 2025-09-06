import { memo, type JSX, type ReactElement } from "react";

interface HtmlString {
  htmlString: string;
}

interface ParseElement {
  tag: string;
  children: (ParseElement | string)[];
  key: string;
}

type RenderableElement = ParseElement | string;

const HtmlParser = memo(
  ({ htmlString }: HtmlString): JSX.Element => {
    const parseHtml = (html: string): RenderableElement[] => {
      const tempDiv: HTMLElement = document.createElement("div");
      tempDiv.innerHTML = html;

      const parseElement = (element: Element): ParseElement => {
        const tagName = element.tagName.toLowerCase();
        const children: (ParseElement | string)[] = [];

        for (let i = 0; i < element.childNodes.length; i++) {
          const child = element.childNodes[i];

          if (child.nodeType === Node.ELEMENT_NODE) {
            children.push(parseElement(child as Element));
          } else if (child.nodeType === Node.TEXT_NODE) {
            const text = child.textContent;
            if (text && text.trim()) {
              children.push(text);
            }
          }
        }

        return {
          tag: tagName,
          children: children,
          key: Math.random().toString(36).substr(2, 9),
        };
      };

      const elements: RenderableElement[] = [];
      for (let i = 0; i < tempDiv.childNodes.length; i++) {
        const child = tempDiv.childNodes[i];
        if (child.nodeType === Node.ELEMENT_NODE) {
          elements.push(parseElement(child as Element));
        } else if (child.nodeType === Node.TEXT_NODE) {
          const text = child.textContent;
          if (text && text.trim()) {
            elements.push({
              tag: "span",
              children: [text],
              key: Math.random().toString(36).substr(2, 9),
            });
          }
        }
      }

      return elements;
    };

    const renderElement = (
      element: RenderableElement
    ): ReactElement | string => {
      if (typeof element === "string") {
        return element;
      }

      const Tag = element.tag as keyof JSX.IntrinsicElements;
      const key = element.key;

      return (
        <Tag key={key}>
          {element.children.map((child) =>
            typeof child === "string" ? child : renderElement(child)
          )}
        </Tag>
      );
    };

    const parsedElements = parseHtml(htmlString);

    return (
      <div className="Description" data-testid="product-description">
        {parsedElements.map((element: RenderableElement) =>
          renderElement(element)
        )}
      </div>
    );
  },
  ({ htmlString: oldHtmlString }, { htmlString }) => {
    return oldHtmlString === htmlString;
  }
);

export default HtmlParser;
