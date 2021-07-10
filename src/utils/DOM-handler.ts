/* eslint-disable @typescript-eslint/no-explicit-any */

export function outerHeight(element: any) {
  const curStyle = element?.currentStyle || window.getComputedStyle(element)
  let size = element.offsetHeight
  size += parseInt(curStyle.marginTop)
  size += parseInt(curStyle.marginBottom)
  return size
}

export function findElements(elementParent: Element, query: string) {
  const elementsFinded = elementParent.querySelectorAll(query)
  const elements: Element[] = []
  if (elementsFinded) {
    elementsFinded.forEach((el) => {
      elements.push(el)
    })
  }
  return elements
}

export function proccessAttributes(
  elements: Element | Element[],
  attr: string
) {
  if (!elements || (Array.isArray(elements) && !elements.length) || !attr)
    return []
  const elementsArray = Array.isArray(elements) ? elements : [elements]
  const ids: string[] = []
  elementsArray.forEach((el) => {
    if (el && el.getAttribute) {
      ids.push(el.getAttribute(attr) as string)
    }
  })
  return ids
}

export function removeClass(elements: Element | Element[], classname: string) {
  if (!elements || !classname) return
  const elementsArray = Array.isArray(elements) ? elements : [elements]
  elementsArray.forEach((el) => {
    if (el.classList) {
      el.classList.remove(classname)
    }
  })
}

export function findAddClass(
  elements: Element | Element[],
  classname: string,
  attr: string,
  valueToCompare: string | number
) {
  if (!elements || !classname || !attr || !valueToCompare) return
  const elementsArray = Array.isArray(elements) ? elements : [elements]
  elementsArray.forEach((el) => {
    if (el.classList) {
      const attrValue = el.getAttribute(attr)
      if (attrValue === valueToCompare) {
        el.classList.add(classname)
      }
    }
  })
}

export function offsetTop(id: string) {
  const element = document.querySelector(id)
  if (!element) return 0
  return (element as HTMLDivElement).offsetTop
}

export function offsetHeight(id: string) {
  const element = document.querySelector(id)
  if (!element) return 0
  return (element as HTMLDivElement).offsetHeight
}
