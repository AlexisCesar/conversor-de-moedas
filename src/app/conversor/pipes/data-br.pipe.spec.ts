import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar 2001-03-21 para 21/03/2001', () => {
    const pipe = new DataBrPipe();
    expect('21/03/2001').toBe(pipe.transform('2001-03-21'));
  });
});
