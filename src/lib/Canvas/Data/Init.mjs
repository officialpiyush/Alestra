import Evaluator from '../Parser/Evaluator.mjs';
import Method from '../Parser/Method';
import { multiOptions } from '../Util/Util';
import { Type } from 'klasa';

export default function init(evaluator) {
	if (!(evaluator instanceof Evaluator)) throw new TypeError(`Expected evaluator to be an Evaluator instance, got ${new Type(evaluator)} instead.`);

	evaluator
		.add(new Method('changeCanvasSize')
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true }))
		.add(new Method('changeCanvasWidth')
			.add({ name: 'width', type: 'number', required: true }))
		.add(new Method('changeCanvasHeigth')
			.add({ name: 'height', type: 'number', required: true }))
		.add(new Method('save'))
		.add(new Method('rotate')
			.add({ name: 'angle', type: 'number', required: true }))
		.add(new Method('scale')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true }))
		.add(new Method('translate')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true }))
		.add(new Method('clip'))
		.add(new Method('setTransform')
			.add({ name: 'a', type: 'number', required: true })
			.add({ name: 'b', type: 'number', required: true })
			.add({ name: 'c', type: 'number', required: true })
			.add({ name: 'd', type: 'number', required: true })
			.add({ name: 'e', type: 'number', required: true })
			.add({ name: 'f', type: 'number', required: true }))
		.add(new Method('resetTransformation'))
		.add(new Method('getImageData')
			.add({ name: 'x', type: 'number', required: false })
			.add({ name: 'y', type: 'number', required: false })
			.add({ name: 'width', type: 'number', required: false })
			.add({ name: 'height', type: 'number', required: false })
			.add({ name: 'callback', type: 'callback', required: false }))
		.add(new Method('putImageData')
			.add({ name: 'imagedata', type: 'Uint8Array', required: true })
			.add({ name: 'dx', type: 'number', required: true })
			.add({ name: 'dy', type: 'number', required: true })
			.add({ name: 'dirtyX', type: 'number', required: false })
			.add({ name: 'dirtyY', type: 'number', required: false })
			.add({ name: 'dirtyWidth', type: 'number', required: false })
			.add({ name: 'dirtyHeight', type: 'number', required: false }))
		.add(new Method('fill'))
		.add(new Method('addText')
			.add({ name: 'text', type: 'string', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'maxWidth', type: 'number', required: false }))
		.add(new Method('addResponsiveText')
			.add({ name: 'text', type: 'string', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'maxWidth', type: 'number', required: true }))
		.add(new Method('addMultilineText')
			.add({ name: 'text', type: 'string', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'maxWidth', type: 'number', required: true })
			.add({ name: 'lineHeight', type: 'number', required: true }))
		.add(new Method('stroke'))
		.add(new Method('addStrokeRect')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true }))
		.add(new Method('addStrokeText')
			.add({ name: 'text', type: 'string', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true }))
		.add(new Method('measureText')
			.add({ name: 'text', type: 'string', required: true })
			.add({ name: 'callback', type: 'callback', required: false }))
		.add(new Method('setStroke')
			.add({ name: 'color', type: 'string', required: false }))
		.add(new Method('setLineWidth')
			.add({ name: 'width', type: 'number', required: false }))
		.add(new Method('setStrokeWidth')
			.add({ name: 'width', type: 'number', required: false }))
		.add(new Method('setLineDashOffset')
			.add({ name: 'value', type: 'number', required: true }))
		.add(new Method('setLineJoin')
			.add({ name: 'value', type: 'custom', required: true, custom: multiOptions.bind(null, ['bevel', 'round', 'miter']) }))
		.add(new Method('setLineCap')
			.add({ name: 'value', type: 'custom', required: true, custom: multiOptions.bind(null, ['butt', 'round', 'square']) }))
		.add(new Method('setLineDash')
			.add({ name: 'segments', type: 'number[]', required: true }))
		.add(new Method('addImage')
			.add({ name: 'link', type: 'buffer', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true })
			.add({
				name: 'options', type: 'object', required: false, properties: new Map()
					.set('radius', { name: 'radius', type: 'number', required: false })
					.set('type', { name: 'type', type: 'custom', required: false, custom: multiOptions.bind(null, ['round', 'bevel']) })
			}))
		.add(new Method('addRoundImage')
			.add({ name: 'link', type: 'buffer', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: false }))
		.add(new Method('addBevelImage')
			.add({ name: 'link', type: 'buffer', required: true })
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'width', type: 'number', required: true })
			.add({ name: 'height', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: false }))
		.add(new Method('addCircle')
			.add({ name: 'x', type: 'number', required: true })
			.add({ name: 'y', type: 'number', required: true })
			.add({ name: 'radius', type: 'number', required: false }));
}