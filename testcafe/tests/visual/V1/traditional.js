import { takeSnapshot } from 'testcafe-blink-diff';

fixture(`AppliFasion V1`).page(`https://demo.applitools.com/gridHackathonV1.html`)

    test('Perform Visual Check', async t => {
        await takeSnapshot(t);
    });
