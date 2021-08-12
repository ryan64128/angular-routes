import { NamesToUpperCasePipe } from './names-to-upper-case.pipe';

describe('NamesToUpperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new NamesToUpperCasePipe();
    expect(pipe).toBeTruthy();
  });
});
