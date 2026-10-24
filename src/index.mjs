import assert from 'node:assert/strict';
import { jsonCursorPullConnector } from '@x12i/memorix-connector-reference';
import { createConnectorTestHarness } from '@x12i/memorix-connector-sdk';
const source = { id: 'fixture-reference', name: 'Local reference', kind: 'fixture', streams: [{
  streamId: 'items', endpoint: '/items', objectType: 'ref-cursor-item-raw', dataCategory: 'entity', identityPath: 'id', checkpoint: { method: 'cursor' },
}] };
const harness = createConnectorTestHarness({ connector: jsonCursorPullConnector, source });
const result = await harness.pull();
assert.equal(result.status, 'succeeded');
assert.equal(harness.port.records.length, 5);
assert.deepEqual(harness.port.records.map(record => record.sourceItemId), ['c1', 'c2', 'c3', 'c4', 'c5']);
console.log({ status: result.status, collectedIds: harness.port.records.map(record => record.sourceItemId) });
